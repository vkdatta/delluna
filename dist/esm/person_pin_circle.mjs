export const name="person_pin_circle";
export const id="dl_6df63bbbfd244b1c8904";
export const url=new URL("../icons/P/person_pin_circle.svg?v=6fbe166b8b1b72e556ae0bdf1d389941a4390b9ebe5e8bf1e0de080d94f48cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
