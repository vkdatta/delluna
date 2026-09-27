export const name="arrow-u-right-up-bold";
export const id="dl_5bec561247fa4c7f9b23";
export const url=new URL("../icons/arrow-u-right-up-bold.svg?v=9985f4ef00800e3a012625a62146936000ff3a3f20ecde7f444859dd53536d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
