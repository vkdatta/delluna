export const name="shield-plus-light";
export const id="dl_fb5f2f042b0ea1ef32ae";
export const url=new URL("../icons/shield-plus-light.svg?v=e77ad24fa1de861e8da7dde9c9d311d367bc411f6efafa1b6b37ba4497700565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
