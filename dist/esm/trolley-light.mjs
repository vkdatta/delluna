export const name="trolley-light";
export const id="dl_e330cda412ac4bcd8526";
export const url=new URL("../icons/T/trolley-light.svg?v=690e3af914cb7fbd04b09a15990f83e5c0310f0fe50394cbceab86c0c150df09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
