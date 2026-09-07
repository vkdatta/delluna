export const name="sign-in-duotone";
export const id="dl_fc890a2881854eed919e";
export const url=new URL("../icons/S/sign-in-duotone.svg?v=beb6394da0a5b07da3421dd8a24ef1062aa90c41bc8c31bef8b0f58e074e80d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
