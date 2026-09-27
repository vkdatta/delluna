export const name="flood-fill";
export const id="dl_250e4ca3f9cb5f60576b";
export const url=new URL("../icons/flood-fill.svg?v=64a6d0ff7cb10a3f7754e09fd6226e21c589ecb15e4129622b023e5d15afb37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
