export const name="thumb_up-fill";
export const id="dl_6d285e30e4c46fcc7b94";
export const url=new URL("../icons/thumb_up-fill.svg?v=5fc9bcfa2382dd97a6d14343e6a774acc5bf1646f5ebdc7d9b16ef318dbb13cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
