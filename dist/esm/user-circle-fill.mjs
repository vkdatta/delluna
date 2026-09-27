export const name="user-circle-fill";
export const id="dl_5c7a5d20da8f1f27b2e5";
export const url=new URL("../icons/user-circle-fill.svg?v=156fa054a89284a13145931a91e3111a4603db1fa38dd795bcb9eaad812c593c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
