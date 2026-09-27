export const name="taxi";
export const id="dl_f00fac56f8aa38c5bf4a";
export const url=new URL("../icons/taxi.svg?v=708bd504390b5c7d9a6268ca7386a2782e641354e5840f8000f1702b97d0020a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
