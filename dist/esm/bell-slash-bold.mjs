export const name="bell-slash-bold";
export const id="dl_a69c8ab8d84948769049";
export const url=new URL("../icons/bell-slash-bold.svg?v=c6bed94ca61bf955625cdabb73fe15d1ef82a26b06a831b39bf26ee0b3e5c92a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
