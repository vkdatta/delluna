export const name="soap-fill";
export const id="dl_40be69faabf5ce823ec8";
export const url=new URL("../icons/soap-fill.svg?v=c2c1179cb6d75663cd319982aa2805f0083bdcd1b0494ce02aefea7e4629aa97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
