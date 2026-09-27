export const name="lucid_3-minimize";
export const id="dl_73f8f3ea83d44494a2ce";
export const url=new URL("../icons/lucid_3-minimize.svg?v=8403898891337068cd2db9f0f9db87ed4b5d4179c0b0f091121f65dc30f6242e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
