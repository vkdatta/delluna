export const name="lucid_3-shield-minus";
export const id="dl_e71b9d685ade479b823b";
export const url=new URL("../icons/lucid_3-shield-minus.svg?v=a3ab1006d2b44b936f218cb523106efdfdceae18f0d7ea2cb593970c4ef6321e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
