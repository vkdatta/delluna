export const name="lucid_3-shield-alert";
export const id="dl_727acaccf92e4ad19909";
export const url=new URL("../icons/lucid_3-shield-alert.svg?v=0dee816222a7b2ea7c962f457f8123bcdb76bd69a47f469ef0cbc7f87608f6b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
