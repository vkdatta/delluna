export const name="dine_in";
export const id="dl_bbb287fee09081caa555";
export const url=new URL("../icons/dine_in.svg?v=8586ffae61f95ab2afe220a9cedbc247e994d1bfdddbc0a420686b9e63fa1487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
