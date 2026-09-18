export const name="mobile_check";
export const id="dl_b842aef12cba4888aad5";
export const url=new URL("../icons/M/mobile_check.svg?v=5cdeeb354322a6a1328e2f71d5b95ece0da6ef8bc62aba4c057ed28bc1ec1d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
