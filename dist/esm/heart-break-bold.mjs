export const name="heart-break-bold";
export const id="dl_94b3c26baa5c421d9f8b";
export const url=new URL("../icons/heart-break-bold.svg?v=4f2c229922693519a3b0d011a3a2994fa8c247cf34d7f74df64995f2c122d26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
