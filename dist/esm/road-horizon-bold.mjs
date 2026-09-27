export const name="road-horizon-bold";
export const id="dl_c2beb3c79d114b0e99d6";
export const url=new URL("../icons/road-horizon-bold.svg?v=02e5b8be5ebc162d73285db48a435570ad991efe4e285aeff9693e80559a835f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
