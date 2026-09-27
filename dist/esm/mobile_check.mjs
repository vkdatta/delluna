export const name="mobile_check";
export const id="dl_f74463f203b57313330f";
export const url=new URL("../icons/mobile_check.svg?v=20736350a9b496d063a33a8aa1ce89fbf0a0866ffe46d4ff0fbbb8e289f87728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
