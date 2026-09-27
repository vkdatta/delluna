export const name="scrollable_header";
export const id="dl_78a66057ef84e60e7348";
export const url=new URL("../icons/scrollable_header.svg?v=5c7892494435d7b135ae9f454c2a92ec08ce26c7ad2580c1ba01ad1d9d931bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
