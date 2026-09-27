export const name="fish-simple-light";
export const id="dl_13b9a6f4b85044948ca6";
export const url=new URL("../icons/fish-simple-light.svg?v=c67f6e60fef0aa267e62d98146bfb8df704c6b23920e5efe40a9161f630e5bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
