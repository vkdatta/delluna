export const name="puzzle-piece";
export const id="dl_6ced78f09ef3494a93c5";
export const url=new URL("../icons/puzzle-piece.svg?v=65f4ee4f170f7d9771917c4c271e21525d1af7c478b2700b8d0fcbb91683839c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
