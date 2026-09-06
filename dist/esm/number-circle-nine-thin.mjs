export const name="number-circle-nine-thin";
export const id="dl_19994ae6686745b1a015";
export const url=new URL("../icons/number-circle-nine-thin.svg?v=347d59ec7037786d5263cdff89ecd2c4567f3112b55941927e147143e3d4eaaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
