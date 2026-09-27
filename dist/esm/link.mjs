export const name="link";
export const id="dl_2e34914f4c1a9cf9c705";
export const url=new URL("../icons/link.svg?v=4735a51c43f11ac6a87e5e93c2f864018ae0c6d9571ea9016334dfdbc20dc2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
