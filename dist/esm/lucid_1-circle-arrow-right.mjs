export const name="lucid_1-circle-arrow-right";
export const id="dl_2cca6dcf344848c083c1";
export const url=new URL("../icons/lucid_1-circle-arrow-right.svg?v=5bc884b5dc7f929c6f3c0199b60e297e574c8aba13731453c7c03fc043f13b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
