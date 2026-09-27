export const name="attribution";
export const id="dl_b94eb65fc7fad82e98e5";
export const url=new URL("../icons/attribution.svg?v=b2c4016013e54398f52e1408496e0886517793ecee4e4c0dec163f22f2fa2b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
