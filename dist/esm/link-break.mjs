export const name="link-break";
export const id="dl_d16bbc1650a0433b9902";
export const url=new URL("../icons/link-break.svg?v=f6d0203fef854cb12c52d5f6a3edcb05ceec5c8f6ce8b5f117ebcf182b5b7b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
