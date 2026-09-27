export const name="smiley-melting";
export const id="dl_cb29928d92e2c54600e5";
export const url=new URL("../icons/smiley-melting.svg?v=b2c5b52a4ec7cea1c19f4d311ed9be708a767045fd5e200303f6ff336a6575e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
