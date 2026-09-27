export const name="lucid_1-calendar-x-2";
export const id="dl_34c8f2d159aa49d18431";
export const url=new URL("../icons/lucid_1-calendar-x-2.svg?v=0225336215e15e7630e555b06586637063e26e0d47e0a6dc83c5574eca550fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
