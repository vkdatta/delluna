export const name="beenhere-fill";
export const id="dl_50db2882bbdaa4ea6ab6";
export const url=new URL("../icons/beenhere-fill.svg?v=7f5a2da975404297bc0efc0909b646ae7d19ba5beb11f1b37c0f092f4e63e64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
