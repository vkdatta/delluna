export const name="border_all";
export const id="dl_61f8f22b3c11fccad8f2";
export const url=new URL("../icons/border_all.svg?v=371802ff77e76565d5cb94d399e898170fa9a22bac5538758a3ddc0410cb9ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
