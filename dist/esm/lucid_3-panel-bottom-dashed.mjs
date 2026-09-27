export const name="lucid_3-panel-bottom-dashed";
export const id="dl_ad8aa4a79ee24818aee7";
export const url=new URL("../icons/lucid_3-panel-bottom-dashed.svg?v=9b62e634b85cbc2a07f5b85483ba5d1ef79dce432a6c13faf402d86f5f10fe45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
