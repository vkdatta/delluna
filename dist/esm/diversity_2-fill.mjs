export const name="diversity_2-fill";
export const id="dl_0d1757e2f13f8e3ac191";
export const url=new URL("../icons/diversity_2-fill.svg?v=a2d9f0911ec7f495aa059132a8b803bf47acc49f36e19526e3c72aeb8342d594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
