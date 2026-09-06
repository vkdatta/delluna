export const name="lucid_1-arrow-down-z-a";
export const id="dl_e668103f3a0449059ff0";
export const url=new URL("../icons/lucid_1-arrow-down-z-a.svg?v=e83be4d9f7bbdb97f96986d24201cd1cd14d2ec5fa99bf93813cbdb746c62b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
