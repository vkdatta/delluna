export const name="drop-half-duotone";
export const id="dl_1052a18b69b1465a99c5";
export const url=new URL("../icons/drop-half-duotone.svg?v=7d372c6eff67197be7e3dd2d83545131f735519f76c393ddb69ff08edc5bb586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
