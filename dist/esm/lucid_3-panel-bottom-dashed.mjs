export const name="lucid_3-panel-bottom-dashed";
export const id="dl_ad8aa4a79ee24818aee7";
export const url=new URL("../icons/lucid_3-panel-bottom-dashed.svg?v=aca1d50c644c7191dd9cbd5f07a34714fd55fd21d0457061b38d01cb95a87261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
