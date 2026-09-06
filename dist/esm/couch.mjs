export const name="couch";
export const id="dl_a3f4d6e264794851ac23";
export const url=new URL("../icons/couch.svg?v=10038216204644579644cbdba6793131209f462c776c43235c95c5098cbf8087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
