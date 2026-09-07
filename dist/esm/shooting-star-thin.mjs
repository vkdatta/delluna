export const name="shooting-star-thin";
export const id="dl_64b39c7a98cd4c54a6bf";
export const url=new URL("../icons/S/shooting-star-thin.svg?v=99af8675ee8e6314d605f2c9316d8e6f58d4fbd4cfbc513d231dd265cd4730b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
