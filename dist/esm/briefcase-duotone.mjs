export const name="briefcase-duotone";
export const id="dl_7c5da54ec0ac41c097a3";
export const url=new URL("../icons/briefcase-duotone.svg?v=01e314f28292774b0d4d52c1752f136c34144736b0ae9aa2ff6b76f7a17d8bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
