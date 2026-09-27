export const name="copy-light";
export const id="dl_f1f9dc940781430195f9";
export const url=new URL("../icons/copy-light.svg?v=739d9f2b6e7d5f12d45fcd41c28b35ae09591bd4358e3b277b4f10c9d9d227a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
