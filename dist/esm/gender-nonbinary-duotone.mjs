export const name="gender-nonbinary-duotone";
export const id="dl_8001d6d41063491783ba";
export const url=new URL("../icons/gender-nonbinary-duotone.svg?v=b5390928e4e3790cefbce3c789e9a485dc5a94400a070c2db0008bddab316baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
