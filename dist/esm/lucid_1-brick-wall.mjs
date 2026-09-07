export const name="lucid_1-brick-wall";
export const id="dl_e740df8cfe7841e7ae46";
export const url=new URL("../icons/lucid_1-brick-wall.svg?v=667946169529e5a813a254b696a7a9450623bea97b6a5953ac774d3e9f398497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
