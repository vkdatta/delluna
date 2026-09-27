export const name="bag-simple-bold";
export const id="dl_b024864c2204465ab20f";
export const url=new URL("../icons/bag-simple-bold.svg?v=b725ca320c3758dbbac6ac4c66d070a3201f951626b4dc41578e8ac8e1381c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
