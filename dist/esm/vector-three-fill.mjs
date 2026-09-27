export const name="vector-three-fill";
export const id="dl_626306ef1245b62f7a44";
export const url=new URL("../icons/vector-three-fill.svg?v=c3b60e8807b70c932028e735b1f9d5526a1d75175055c53f747aee4c36da55f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
