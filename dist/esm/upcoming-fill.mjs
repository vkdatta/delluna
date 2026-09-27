export const name="upcoming-fill";
export const id="dl_46748bc0314014554e75";
export const url=new URL("../icons/upcoming-fill.svg?v=711a0a48e5edd826334e8c8789cb46f1c3ca966cc5e4a27e742df4db565a17ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
