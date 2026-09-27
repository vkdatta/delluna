export const name="pause_circle-fill";
export const id="dl_cf4cea53008d74359976";
export const url=new URL("../icons/pause_circle-fill.svg?v=6f3408340f9e82088ef0717deff09f4e1c3bdce259e7750a6459c88c803484b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
