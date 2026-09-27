export const name="duo";
export const id="dl_dc0f7fbc35e47e03c2b6";
export const url=new URL("../icons/duo.svg?v=0f00a1c02fbe3a00bdbb94e29f1f5e0e97c9c1b630d0d321d17078d15654fb59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
