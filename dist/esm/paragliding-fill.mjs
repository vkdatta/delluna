export const name="paragliding-fill";
export const id="dl_f0d62ae8ed51a4958781";
export const url=new URL("../icons/paragliding-fill.svg?v=95ac81ed46c89cf4a4c6ef7517d049ea80eccaf3a1b2537cf93feb41f0b8d306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
