export const name="traffic_jam";
export const id="dl_bf83a4906ca369fe6541";
export const url=new URL("../icons/traffic_jam.svg?v=f034ef6eaf3ba5c8a0f5239c06d75936c336691c4674da749db5742bd0d9e346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
