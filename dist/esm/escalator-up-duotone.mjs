export const name="escalator-up-duotone";
export const id="dl_ad272eb6e9fa475ba1c3";
export const url=new URL("../icons/escalator-up-duotone.svg?v=f7fb0533e4679852cd10d123c6d4d194227b4fa14930b53930787c84bc08cf1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
