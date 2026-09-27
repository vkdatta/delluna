export const name="barcode-fill-classic";
export const id="dl_2b6dd49ed1ae469c6672";
export const url=new URL("../icons/barcode-fill-classic.svg?v=d17c005350613366d998422c75ebb2f91c8cc2d61b38b4b53ba56184bdb02fdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
