export const name="vpn_key-fill";
export const id="dl_5bc1fd2fca3adbdcf26a";
export const url=new URL("../icons/vpn_key-fill.svg?v=86b0f4f7b11b96a587201249108cdb8947423e084791654679d6d1614cde1cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
