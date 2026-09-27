export const name="square-text";
export const id="dl_1844f3bcefe4450a873c";
export const url=new URL("../icons/square-text.svg?v=30db12814327f9e4a2bfb4ad9bf17b0a3ebb8ae2fad596030673f55bc77fdea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
