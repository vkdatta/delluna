export const name="square-divide";
export const id="dl_4dbb1f0b2e99429799c7";
export const url=new URL("../icons/square-divide.svg?v=0aabcda6344a79ca15b6d9f02cf1147e5357bcc8d9da2b9763166dd2389cde12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
