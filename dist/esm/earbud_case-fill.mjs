export const name="earbud_case-fill";
export const id="dl_2bc009bd2eb6436596a0";
export const url=new URL("../icons/earbud_case-fill.svg?v=d5112bd7b5b8cb4b6b35568826a9473ad5a697f323b7c931a9596f56f4808f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
