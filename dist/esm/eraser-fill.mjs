export const name="eraser-fill";
export const id="dl_84f69ac581254167b2c5";
export const url=new URL("../icons/eraser-fill.svg?v=624d15230b9bf57ec1862db601ba3e53e0843705e3a720e46d87f8f0cbf41025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
