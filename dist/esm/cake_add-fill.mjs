export const name="cake_add-fill";
export const id="dl_33f7f356fa0d4b629ef3";
export const url=new URL("../icons/cake_add-fill.svg?v=c7d22e546051ead7458fb921f85c8f52b73284b8723060564e8fdb24e017006f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
