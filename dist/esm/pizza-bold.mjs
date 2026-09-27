export const name="pizza-bold";
export const id="dl_ebc8dcdc1b6c4bc2a2af";
export const url=new URL("../icons/pizza-bold.svg?v=69a1f309c72a01b3525d0a5b5db9909b29f40676ab46a3ffe86bb75056fa9b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
