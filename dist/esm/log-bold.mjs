export const name="log-bold";
export const id="dl_845d1eb702714e32ab8f";
export const url=new URL("../icons/log-bold.svg?v=269009fa3ba04dc355083491016c14ad9da26764ce19a2c642406d3cefc267a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
