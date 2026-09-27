export const name="exclamation-mark-bold";
export const id="dl_f3c83efe57674462958e";
export const url=new URL("../icons/exclamation-mark-bold.svg?v=26824917e8863124f57a7a2f96fdecc08bb16f291d77e4e5b092acd41d1a3f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
