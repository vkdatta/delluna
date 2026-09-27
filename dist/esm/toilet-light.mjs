export const name="toilet-light";
export const id="dl_336a3ab572778d760b7c";
export const url=new URL("../icons/toilet-light.svg?v=af43a6236130afc886f8b8a9d87ed48d73f6f7ae3047518398fce107fde2ea86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
