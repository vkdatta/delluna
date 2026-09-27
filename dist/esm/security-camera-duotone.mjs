export const name="security-camera-duotone";
export const id="dl_cd4090fe8a8b9ad88698";
export const url=new URL("../icons/security-camera-duotone.svg?v=682a0e86af80629faf8679e9357a89f9192e88409f60656cdc87379cce92cdf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
