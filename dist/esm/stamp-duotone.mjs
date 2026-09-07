export const name="stamp-duotone";
export const id="dl_2fb9779c1b55417bbea3";
export const url=new URL("../icons/S/stamp-duotone.svg?v=75ef40e8bf8e170588b245a9eb622a0307b9931e886dcd17697ced2c57d7fcfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
