export const name="number-square-eight-light";
export const id="dl_56197a5b106b41e1a39f";
export const url=new URL("../icons/number-square-eight-light.svg?v=2991928a0eaa8f951e4d171757889e9ad959f1a82fd4fe1e5f924a7ddd5f4142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
