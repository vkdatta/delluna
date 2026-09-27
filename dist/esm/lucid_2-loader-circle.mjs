export const name="lucid_2-loader-circle";
export const id="dl_972179fdbc7e4d5d923b";
export const url=new URL("../icons/lucid_2-loader-circle.svg?v=8b47a945bf777c35b9ee48f6534f299084e9bdb26e7101c2d52b23683339f8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
