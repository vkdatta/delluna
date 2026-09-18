export const name="spo2-fill";
export const id="dl_95a32b0ed9ba4fd19889";
export const url=new URL("../icons/S/spo2-fill.svg?v=dfc1b34f931c3f2e93cf1f28b78c4eb1fef8ee123b879189ce710f62dc0f7a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
