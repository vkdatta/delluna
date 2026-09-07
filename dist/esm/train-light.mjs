export const name="train-light";
export const id="dl_facdfde380f04d4c9d5c";
export const url=new URL("../icons/T/train-light.svg?v=2911cba18e611d9265d4f0ba8d3d6c57faea7120efaaab400455ad2098a176df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
