export const name="ranking-duotone";
export const id="dl_5a2d5330d6eb4876a8f7";
export const url=new URL("../icons/ranking-duotone.svg?v=268884b301da7e56c0b16545ea90463940a32ceef045769eaa368ff9dd90121d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
