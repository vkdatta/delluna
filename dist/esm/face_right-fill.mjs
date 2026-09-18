export const name="face_right-fill";
export const id="dl_5ba5351c805b488b8e51";
export const url=new URL("../icons/face_right-fill.svg?v=d47e5e201b83d3692223386df587db67246972d1a746e7a506909e4eadb48367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
