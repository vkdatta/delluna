export const name="vpn_key_alert";
export const id="dl_995e48e4c754ef420e72";
export const url=new URL("../icons/vpn_key_alert.svg?v=e64983e9ebb2bba455f96116989273b7e5e1fdc2335d30323f69df88aa0522fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
