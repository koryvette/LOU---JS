
getData();

async function getData(){
    const response = await fetch('EventfulXml1test.csv');
    const data = await response.text();

    const EventData = data.split('\n').slice(1);
    EventData.forEach(row => {
        const columns = row.split(',');
        const Venue = columns[0];
        const EventName = columns[1];
        const Description = columns[2];
        const StartDate = columns[3];
        const StartTime = columns[4];
        const EndDate = columns[5];
        const Link = columns[6];
        const City = columns[7];
        const Image = columns[8];
        const Background = columns[10];

        console.log(Venue,EventName,StartDate);
    });
}