export const name="selection-inverse-bold";
export const id="dl_1f512acf9766c3bf5a7f";
export const url=new URL("../icons/selection-inverse-bold.svg?v=3c30af8cbf64345593a06b592d714ce8d43a2e0afbeb88db4f2727de97c97dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
