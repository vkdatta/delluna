export const name="cloud-rain";
export const id="dl_033a16b03c544356b821";
export const url=new URL("../icons/cloud-rain.svg?v=043d1361411968116062c3fc9be7e05c834a9cccdb2386485dbed0e4fa1d5a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
