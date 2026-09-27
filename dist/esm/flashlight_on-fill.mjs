export const name="flashlight_on-fill";
export const id="dl_bd21cff4cca4352e50b8";
export const url=new URL("../icons/flashlight_on-fill.svg?v=d5e559c1ae982b3e01908d0d29f1b5bdea75b8e4e009536904a4d2e872f1ee0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
