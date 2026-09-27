export const name="eraser-light";
export const id="dl_8420b27accdf4f62b636";
export const url=new URL("../icons/eraser-light.svg?v=2a39806b21e0a3b84b269cdb1954ef437168b84a9bac4dfbc2fc8354cab6f2ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
