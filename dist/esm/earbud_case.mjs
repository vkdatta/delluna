export const name="earbud_case";
export const id="dl_57f3797ccbac4fb8793a";
export const url=new URL("../icons/earbud_case.svg?v=f9234626fc58b15a00f36917e8a39d5bcef0710bcce5348b990498cc1609826f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
