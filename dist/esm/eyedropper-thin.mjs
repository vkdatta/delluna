export const name="eyedropper-thin";
export const id="dl_1f41524820104fd8a481";
export const url=new URL("../icons/eyedropper-thin.svg?v=2440c9075b2aa5edee7f2d1996f7532f0112fb3e993e08bf16270d14a36e561c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
