export const name="mobile_cast-fill";
export const id="dl_6ea2d82fd0e7595fe787";
export const url=new URL("../icons/mobile_cast-fill.svg?v=81fe8bebe8f8be4961420d61b0b8c24f1f89978a064fe1dab6158bf17ffe3dd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
