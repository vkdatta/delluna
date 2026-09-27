export const name="dots-three-vertical-bold";
export const id="dl_72ddc849b2f143c9a30b";
export const url=new URL("../icons/dots-three-vertical-bold.svg?v=39ac0a010a71902a5e235ce0aa411286e411702197c631eba630e8f4fa4b7d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
