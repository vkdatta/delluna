export const name="envelope-simple";
export const id="dl_d28675cce9754b28b485";
export const url=new URL("../icons/envelope-simple.svg?v=9fa8879aa4da64ef6af0a2e995cc93dd3a755f7f0e2c5814ff82de49b4904b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
