export const name="address-book-tabs-thin";
export const id="dl_77dfca76f7134f218cd8";
export const url=new URL("../icons/address-book-tabs-thin.svg?v=3fb434bf349b7381230cdda89d893cfc24f64cf62ad96f31e2d0053451d4ebb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
