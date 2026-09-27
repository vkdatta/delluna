export const name="lucid_2-laptop-minimal";
export const id="dl_8807b80286064ab9b160";
export const url=new URL("../icons/lucid_2-laptop-minimal.svg?v=4dde4dd2b365dd5c9c29fe0c9e00b5ff1df681053cf772b6e1f6a08c4a30fed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
