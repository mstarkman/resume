/* eslint-disable max-len, react/no-array-index-key */
import Details from './details'
import ResumeSectionHeader from './resume_section_header'

const experiences = [
  {
    title: 'Senior Staff Scientist',
    dates: 'October 2017 - Present',
    place: 'SaneBox',
    location: 'Remote',
    bullets: [
      'Built an entire help docs CMS for our support team to create documents in markdown to be available to the public internet.  Ruby on Rails was used on the back-end, Algolia was used for searching with vanilla JS to display the results.',
      'Implemented new features for our customers including our Do Not Disturb feature that allowed customers to hide all of their email for a period of time and then have it sent back to their inbox.  This required changes to all layers of our stack including the mail processing daemons, Ruby on Rails API and the UI Angular/React code.',
      'Worked directly with our in-house UI/UX designer and other front-end developers to maintain, extend and develop our customer facing web application which is written in Ruby on Rails, JavaScript, React and Angular.js.',
    ],
  },
  {
    title: 'Engineering Tech Lead',
    dates: 'August 2016 - October 2017',
    place: 'Homepolish, Inc.',
    location: 'New York, NY (remote)',
    bullets: [
      'Lead the front-end team to build a new front-end infrastructure that will be used for all of our client facing tools.  We built the application as a JavaScript React application that communicated with the GraphQL API back-end using Apollo Client tools and Redux.',
      'Worked on the product engineering team to enhance and maintain our client-facing and internal processing Ruby on Rails, JavaScript and PostgreSQL application to introduce new functionality in a maintainable and performant manner to meet the changing needs of the business.',
      'Integrated a variety of 3rd party tools to allow for event tracking (Segment and Mixpanel) and to externalize our email processing (Iterable) to reduce the work load on the product engineering team so we could deliver proprietary business functionality in a timelier manner.',
      'Provided mentorship and guidance for the lesser experienced team members through a variety of means including code-reviews, pair programming and upfront design discussions.  This included onboarding several engineers for the newly formed front-end team.',
    ],
  },
  {
    title: 'Senior Software Developer',
    dates: 'May 2015 - July 2016',
    place: 'Intellum Inc.',
    location: 'Atlanta, GA (remote)',
    bullets: [
      'Developed and maintained our flagship learning management system product written in Ruby on Rails with a PostgreSQL database back-end to increase the functionality to move to product to better meet the needs of our customers.',
      'Updated all of the HTML and CSS to provide a more contemporary look and feel for the application by working with our in-house designer to make sure that we met the usability goals as well as the aesthetic goals.',
      'Maintained and updated our social networking product, that was written in Node.js and using MongoDB, to bring the code up to the latest versions of the libraries we used as well as implement new functionality to meet the needs of our customers.',
      'Worked with the entire product team to improve and streamline development processes including improving the test suite to remove slow and redundant tests, continuous integration and continuous deployment too decrease the time to delivery and improve correctness in what was delivered.',
    ],
  },
  {
    title: 'Senior Staff Scientist',
    dates: 'September 2014 – May 2015',
    place: 'SaneBox',
    location: 'Remote',
    bullets: [
      'Developed and maintained one of the main customer facing pages on the website to make it easier for our customers to process the emails that were sent to SaneBox folders throughout the day. To accomplish this, we used Angular.js, along with CoffeeScript and JavaScript for the front-end code and our current Ruby on Rails infrastructure as our API.',
      'Worked directly with the UI/UX designer to improve the overall experience of our daily digest page in an iterative manner ensure that the large amounts of data and actions were easily accomplished by our customers.',
      'Provided on-call support to our customers to ensure that their accounts were connecting and processing the email from their email server to minimize any downtime and to make sure that our customers remained happy.',
      'Implemented a new email protocol within our environment to allow our customers to use a wider variety of email servers. This required significant changes to our Ruby on Rails infrastructure since our system was originally developed to work against IMAP based email servers.',
    ],
  },
  {
    title: 'Senior Engineer',
    dates: 'June 2013 – September 2014',
    place: 'General Assembly',
    location: 'New York, NY (remote)',
    bullets: [
      'Lead a team that developed and maintained a Ruby on Rails application that was used by the outcomes team so that they could keep track of the which graduates got jobs and which ones that they still needed to help.  This also included capturing data from student surveys to help ensure the accuracy of the data that was also built into the application.',
      'Developed and maintained a Ruby on Rails application that is used to provide insight into the analytics and tracking data that is stored in our data warehouse that would allow the senior management team to make data driven decisions about the company direction.  In order to keep the application responsive and flexible, we used Backbone.js with CoffeeScript for the client application.',
      'Worked with entire engineering team to move our AWS infrastructure to Heroku to help minimize our operations.  Created all new applications following the principles depicted for twelve-factor apps so that they could be easily deployed to Heroku.',
      'Mentored less-experienced developers to guide them through software development best practices and provided code-reviews to ensure we can keep the quality of our code.',
    ],
  },
  {
    title: 'Senior Engineer',
    dates: 'November 2011 – June 2013',
    place: 'Articulate',
    location: 'New York, NY (remote)',
    bullets: [
      'Developed and maintained next generation of e-Learning tools utilizing Ruby on Rails, Backbone.js, CoffeeScript, PostgeSQL and mongoDB to offer the current set of tools to a wider variety of customers by moving the desktop application functionality to web applications.',
      'Worked on the team that migrated a learning management system originally implemented in ASP.Net Webforms and SQL Server to use Ruby on Rails and PostgreSQL to move the product forward into a more current and maintainable architecture.',
      'As a member of the operations team, I worked with the development teams to deploy applications on EngineYard, Heroku, Amazon EC2 and Microsoft Azure to enable the development teams the flexibility to use the appropriate tooling and languages for the team and the product.',
      'Maintained and enhanced internal applications that are used to run the business built with Ruby on Rails, ASP.Net MVC, SQL Server (various versions), PostgreSQL and mongoDB.',
    ],
  },
  {
    title: 'Senior Developer',
    dates: 'December 2010 – October 2011',
    place: 'Gannett Fleming',
    location: 'Valley Forge, PA',
    bullets: [
      'Design and implemented back-end architecture for a niche social networking site that migrated the data storage SQL Server to mongoDB to ensure performance and scalability in C#.',
      'Designed and developed an environmental management system to replace the existing offering to our customers.',
      'Utilized ASP.Net MVC3, mongoDB and jQuery to implement the updated environmental management system that replaced the system that was written in ASP.Net Webforms.',
      'Maintained a controls reporting system that was written utilizing XSLT 1.0 and SQL Server 2008 R2 T-SQL.',
    ],
  },
  {
    title: 'Sr. Database Developer/Administrator',
    dates: 'November 2007 – December 2010',
    place: 'Activant Solutions',
    location: 'Yardley, PA',
    bullets: [
      'Provided SQL Server 2000/2005/2008 database performance tuning and analysis for our software offerings for customers and internal development and QA groups utilizing SQL Server Profiler and Database Engine Tuning Advisor.',
      'Designed and maintained the physical data model for the next generation solution that used a n-tier architecture to provide new functionality along with leveraging currently programmed business logic within the existing solutions.',
      'Mentored members of the DBA team, development team and quality assurance team to provide guidance when enhancing and modifying the existing database structures while keeping maintainability and performance in mind.',
      'Designed, developed, maintained and provided support for custom database solutions to provide customers with functionality that did not currently exist within the software offering using T-SQL and SQL Server Integration Services.',
      'Worked with customers and internal teams to analyze current database implementations and provide recommendations for optimal server software and hardware configurations for enhancements to existing systems and new systems.',
    ],
  },
  {
    title: 'Development Manager',
    dates: 'April 2006 – November 2007',
    place: 'Metavante Lending Solutions',
    location: 'Chesterbrook, PA',
    bullets: [
      'Responsible for managing a team of six developers to customize the base Loan Origination Studio application to meet the needs of several clients using Microsoft .Net (VB.Net), ASP.Net, VB6, VBScript and Microsoft SQL Server 2000.',
      'Work closely with development staff, project management, business analysts and QA analysts from both the client teams and the base product teams to ensure all development deadlines were met.',
      'Maintain comprehensive project plans and staff to ensure all interrelated tasks are completed in a timely manner.',
      'Managed transition of base Loan Origination Studio application development activities of 15 developers from an office that was being closed to new staff located at our headquarters in Wayne, PA.',
      'Coordinated development activities with offshore development team to enhance aspects of the online version of the Loan Origination Studio application to ensure that all software designs and implementations are consistent with our in-house development team.',
    ],
  },
  {
    title: 'Senior Programmer Analyst',
    dates: 'July 2002 – April 2006',
    place: 'Harte-Hanks',
    location: 'Langhorne, PA',
    bullets: [
      'Performed analysis, logical/physical database design and development of server processes to manage data for a custom CRM solution using Microsoft SQL Server 2000 and Oracle 8.1.x with an ASP/IIS thin client.',
      'Developed, maintained and implemented a direct mail n-Tier application using Microsoft .Net technologies, including C#, ASP.Net, COM+, MSMQ and SQL Server 2000 that was designed to promote software reuse and extensibility.',
      'Designed and developed all aspects of the n-Tier direct mail application including the presentation tier, the business logic tier and the data storage tier.',
      'Concurrently managed numerous mid to long-term projects through the entire software development lifecycle with a fluid development staff to ensure that the requirements of the clients were met on a continual basis.',
    ],
  },
  {
    title: 'Lead Consultant',
    dates: 'August 2001 – June 2002',
    place: 'Aspect Consulting, Inc.',
    location: 'Blue Bell, PA',
    bullets: [
      'Performed analysis, logical/physical database design and development of server processes to manage data for a custom CRM solution using Microsoft SQL Server 2000 and Oracle 8.1.x with an ASP/IIS thin client.',
      'Responsible for architecting logical and physical database architecture to support IMS data loads using Microsoft SQL Server 2000 and Perl to support the operational needs of our clients.',
      'Developed, maintained and implemented web reporting architecture to deliver data to our clients.',
      'Provided consulting services for Endo Pharmaceuticals, Inc. and Harte-Hanks.',
    ],
  },
  {
    title: 'Oracle Database Administrator',
    dates: 'May 2001 – August 2001',
    place: 'Penn Mutual Life Insurance',
    location: 'Horsham, PA',
    bullets: [
      'Responsible for tuning all aspects of the database development environment of a Producer Compensation and Reporting system.',
      'Responsible for assisting a team of 5 developers to create efficient SQL statements and develop PL/SQL DBMS packages, procedures and functions.',
      'Assisted enterprise database administration staff with database maintenance and administration tasks.',
    ],
  },
  {
    title: 'Lead Database Administrator',
    dates: 'November 1999 – May 2001',
    place: 'Fiserv Securities',
    location: 'Philadelphia, PA',
    bullets: [
      'Regularly worked with development team, technical support helpdesk and clients to provide performance tuning assistance including index definition, SQL statement tuning and Oracle database parameter optimization.',
      'The databases were designed to provide account and order information for more than 25 internet brokerage sites or to allow clients to access historical data about the customers’ brokerage transactions.',
      'Managed team of two other database administrators that were responsible for more than 40 databases.',
    ],
  },
  {
    title: 'Developer and Database Administrator',
    dates: 'September 1998 – November 1999',
    place: 'Stores Automated Systems, Inc.',
    location: 'Bristol, PA',
    bullets: [
      'The databases were used as part of a targeted customer marketing data warehousing software package.',
      'Created and maintained all development and production databases including logical/physical data models, automated backup procedures, security, data transformation, stored procedures and triggers.',
      'Backup and maintenance routines written in platform independent Perl and utilized the DBMS data load facilities.',
      'Responsible for all SQL Server and RedBrick RDBMS software installation and upgrades.',
      'Provided customer support for all aspects of the software product\'s data transformation and loading processes.',
    ],
  },
  {
    title: 'Consultant',
    dates: 'May 1997 – September 1998',
    place: 'Integrated System Consulting Group',
    location: 'Wayne, PA',
    bullets: [
      'Designed, developed and tested server based software to support the proprietary sales force automation tool.',
      'Created statistical reports, including counts, cycle time and order frequency.',
      'Worked with development team and system DBA to develop a database model that stores and processes the incoming product sample orders.',
    ],
  },
  {
    title: 'Associate Systems Engineer',
    dates: 'May 1996 – May 1997',
    place: 'Lockheed Martin Corporation',
    location: 'King of Prussia, PA',
    bullets: [
      'Maintained and enhanced NETSIM network simulator that was used to simulate and analyze various networking protocols.',
      'Used Microsoft Visual C++ to simulate a satellite based network.',
    ],
  },
]

const Experience = () => (
  <div className="content">
    <ResumeSectionHeader text="Experience" />
    {experiences.map((experience, index) => <Details key={index} {...experience} />)}
  </div>
)

export default Experience
