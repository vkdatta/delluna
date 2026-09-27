export const name="ticket-percent";
export const id="dl_00598cf03ae440fca640";
export const url=new URL("../icons/ticket-percent.svg?v=3fbc0d398904122863b65eab97c811fbf8d42909ff007af56b3ef498aae4e9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
