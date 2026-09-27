export const name="cloud-arrow-up-light";
export const id="dl_49d11861b51a4317b58e";
export const url=new URL("../icons/cloud-arrow-up-light.svg?v=a462c4319c89620f2316834271d7d98e0b297b5c45764a7aa7339388aedc8937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
