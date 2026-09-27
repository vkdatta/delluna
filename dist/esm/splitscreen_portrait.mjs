export const name="splitscreen_portrait";
export const id="dl_77890652793952dc7122";
export const url=new URL("../icons/splitscreen_portrait.svg?v=5c08177c11ffcb75040e8d97ec2b63c9e782bb9ca4f089acd9157797a38552a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
