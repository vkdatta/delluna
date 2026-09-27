export const name="lucid_1-arrow-up-1-0";
export const id="dl_88d16836e2ac41afa3da";
export const url=new URL("../icons/lucid_1-arrow-up-1-0.svg?v=e617b5a9d991472c9990d752715094bb23ecb613d0d34136b19a6f691fe14c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
