export const name="wand_stars";
export const id="dl_6c912aca2f862a136ea9";
export const url=new URL("../icons/wand_stars.svg?v=f2fa1e82e32b97734219b8de886aa31114e88d7c767655dafc29aa694b56ff97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
