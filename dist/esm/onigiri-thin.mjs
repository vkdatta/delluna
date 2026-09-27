export const name="onigiri-thin";
export const id="dl_310e13574f75429a8eb4";
export const url=new URL("../icons/onigiri-thin.svg?v=82766b4f9b2ac0abc0670233446a793905666aae87e1c7a748c04cf812a7aedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
