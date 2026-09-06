export const name="lucid_2-laptop-minimal";
export const id="dl_8807b80286064ab9b160";
export const url=new URL("../icons/lucid_2-laptop-minimal.svg?v=c9361c052c2061ef142320a81645b553dd1dd46ae29cbcfb77dbec014491a271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
