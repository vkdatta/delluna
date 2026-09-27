export const name="variable_add";
export const id="dl_bbe4c6b363a89b7425e5";
export const url=new URL("../icons/variable_add.svg?v=66f08afeced759cfe81f817be350e318edb50046da6a4104fc9b43d07eca3f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
