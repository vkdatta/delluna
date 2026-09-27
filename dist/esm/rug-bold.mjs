export const name="rug-bold";
export const id="dl_3e93942c35154d269f6e";
export const url=new URL("../icons/rug-bold.svg?v=4d8bce510a2855b6bb8882e7bfff9d63863aea5516ebf9b74e608444d9d4bc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
