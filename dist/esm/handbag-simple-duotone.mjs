export const name="handbag-simple-duotone";
export const id="dl_54281810d85d40ada986";
export const url=new URL("../icons/handbag-simple-duotone.svg?v=cca2abf3acf03a3f5489179fdabedd51e25ea7b986c4797a34d55493623b7f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
