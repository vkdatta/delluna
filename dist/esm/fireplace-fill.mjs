export const name="fireplace-fill";
export const id="dl_2bfcd6890b27b79fe04e";
export const url=new URL("../icons/fireplace-fill.svg?v=9a39a6ac8c6474c1303464adf3c986ab3c97c1d097657096ddc0ca1b25016d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
