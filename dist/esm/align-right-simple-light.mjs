export const name="align-right-simple-light";
export const id="dl_36bb66b9d6454aa08c50";
export const url=new URL("../icons/align-right-simple-light.svg?v=33b2afa129aa8a46d724c32e85160d00a544d61051be7c7283e8798b51307a90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
