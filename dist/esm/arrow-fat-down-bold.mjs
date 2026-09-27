export const name="arrow-fat-down-bold";
export const id="dl_e4ae3224500f4d88b8a4";
export const url=new URL("../icons/arrow-fat-down-bold.svg?v=5676d208c933b542952309446377048cb50c2b9867f254bdb4d071823be64098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
