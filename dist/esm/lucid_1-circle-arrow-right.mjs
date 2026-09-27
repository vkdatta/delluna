export const name="lucid_1-circle-arrow-right";
export const id="dl_2cca6dcf344848c083c1";
export const url=new URL("../icons/lucid_1-circle-arrow-right.svg?v=aec4bf00c98a4c54af21ef3e5fdf8e09d4d2057feb6a029fc65c61de5ddb2782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
