export const name="destruction-fill";
export const id="dl_e981f75908463724d73e";
export const url=new URL("../icons/destruction-fill.svg?v=68577aa6b8d5d4427fe763b1c93e1f2f56154ddf8e9dd42f22972c97935d8b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
