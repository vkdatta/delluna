export const name="coffee-bean-bold";
export const id="dl_f39afffbf9c4483c869c";
export const url=new URL("../icons/coffee-bean-bold.svg?v=89a6e0f5b4b38d56ce28741794b76dd23a1ae01c3d7fc775007be04a6d38ef5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
