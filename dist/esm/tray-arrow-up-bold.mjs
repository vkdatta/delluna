export const name="tray-arrow-up-bold";
export const id="dl_b0cc0a31ca8d1271701e";
export const url=new URL("../icons/tray-arrow-up-bold.svg?v=aaedd58569ad2878b6534fbd8d2809b5dcbecb9601a98d3a421f4be70b697dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
