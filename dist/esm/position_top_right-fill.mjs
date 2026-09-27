export const name="position_top_right-fill";
export const id="dl_3cc4f6c285d53be78da3";
export const url=new URL("../icons/position_top_right-fill.svg?v=7316100afa098681b93f4371de6f2f6ad8c6d67fe4cf9b09cb9820b7b5ec5bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
