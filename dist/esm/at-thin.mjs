export const name="at-thin";
export const id="dl_1297b1436a2642c1aa11";
export const url=new URL("../icons/at-thin.svg?v=4f9e9e127c458ac398dba11da31749235784a552121197929e4c0b13355ebd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
