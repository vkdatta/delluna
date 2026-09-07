export const name="align-right-simple-bold";
export const id="dl_bdefc378b580445db536";
export const url=new URL("../icons/align-right-simple-bold.svg?v=1f284f56a595af26fb3a7ad56493cc2e3c79bb14ef1ecbb12ee2500643f8feab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
