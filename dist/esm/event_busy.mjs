export const name="event_busy";
export const id="dl_2fe0d8b9d2e3aedb87e1";
export const url=new URL("../icons/event_busy.svg?v=2143cd0e3cf10e620655a2f08298d9f1953384143aac86fcebbeca6683806fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
