export const name="healing";
export const id="dl_1bca0ebd43f6410aa740";
export const url=new URL("../icons/H/healing.svg?v=0c6065d48d0ca4e5ba4fb219675e22afe3e24adf062610dc130c6c6bf58f47a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
