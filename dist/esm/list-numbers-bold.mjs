export const name="list-numbers-bold";
export const id="dl_70701c2f2b994adcafe7";
export const url=new URL("../icons/list-numbers-bold.svg?v=ec7fd0b080ec7dc748928f47eb8d6fbbd09827312ee7753931798f4fafa2d1ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
