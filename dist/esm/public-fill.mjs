export const name="public-fill";
export const id="dl_d6c8599084754a9ca73a";
export const url=new URL("../icons/public-fill.svg?v=70a84f4a5621f9bf2ab434d7cd7c38d3ed79db0d806584bb452bc4995c3f6dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
