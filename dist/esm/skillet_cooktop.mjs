export const name="skillet_cooktop";
export const id="dl_5285bce9c64bd5f143fd";
export const url=new URL("../icons/skillet_cooktop.svg?v=b264017b86651519c396372aae26df2c4fb350c0ba3985ccaa35b21e321d46a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
