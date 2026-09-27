export const name="align-right-simple-bold";
export const id="dl_bdefc378b580445db536";
export const url=new URL("../icons/align-right-simple-bold.svg?v=d087771f8fe7ec3b7c9d677b9d4530ba30b88d84a3134ec6badb1962c787832d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
