export const name="mode_heat";
export const id="dl_9cd7d29ba9a21c1a9a90";
export const url=new URL("../icons/mode_heat.svg?v=a526f3bb48c5e0e01f1cb555ada82f3bb0f51328e091681409330c05548d923d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
