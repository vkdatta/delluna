export const name="turtle";
export const id="dl_b8bf166d818847da97b0";
export const url=new URL("../icons/turtle.svg?v=ce92fa5ff656effc6b99c5670dbd90c31cf16bbf804408d9f21394f97bd4aaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
