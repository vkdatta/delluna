export const name="arrow-line-up-bold";
export const id="dl_946916d6bb27459f9a4f";
export const url=new URL("../icons/arrow-line-up-bold.svg?v=4b2d0d18f61b580a720e0de70cfefa7dd119c7aacbd603b0d02e1b84e60be38b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
