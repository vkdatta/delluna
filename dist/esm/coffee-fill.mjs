export const name="coffee-fill";
export const id="dl_075dfeeebe5541c792d2";
export const url=new URL("../icons/coffee-fill.svg?v=cff888fa294f6f1c554689251bee033be464820e6208971e501395f31a4188fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
