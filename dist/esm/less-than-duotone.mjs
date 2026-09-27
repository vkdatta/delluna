export const name="less-than-duotone";
export const id="dl_0822fdef8a70451ebef6";
export const url=new URL("../icons/less-than-duotone.svg?v=7e62b5f3883baf40db66a26bd40318761df24452cba0a2f3a433b98db65a5d09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
