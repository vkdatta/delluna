export const name="lucid_3-pound-sterling";
export const id="dl_bf86bd18377d4b84885e";
export const url=new URL("../icons/lucid_3-pound-sterling.svg?v=18de3370a03bcfbc49eff891a2520abd0d22c386efe3addc13ddaaca1a775dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
