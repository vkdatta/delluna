export const name="grid-four-bold";
export const id="dl_c4e77bc9c3aa467e8a2a";
export const url=new URL("../icons/grid-four-bold.svg?v=27f4a81d2ca79d658dc6fbf0435591b117d321bcae8e0da89901bed6befdf894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
