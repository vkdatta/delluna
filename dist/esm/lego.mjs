export const name="lego";
export const id="dl_0d13cea0253144d09466";
export const url=new URL("../icons/lego.svg?v=31c7a4c033c6eec3879a91d3e1171949dca693ba7f9c37a46d544446b15fb4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
