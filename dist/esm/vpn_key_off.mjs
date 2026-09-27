export const name="vpn_key_off";
export const id="dl_0cdd0b22d0f5de0b9084";
export const url=new URL("../icons/vpn_key_off.svg?v=47caae0087169bb1cde133224d924d0d9045c55df875102c6d9f6cd3db55e97d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
