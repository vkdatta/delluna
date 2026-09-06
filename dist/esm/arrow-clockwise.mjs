export const name="arrow-clockwise";
export const id="dl_86ccdf83a02046769358";
export const url=new URL("../icons/arrow-clockwise.svg?v=4a78a777b692cb74826e3071ae7049cc0d3927e68a7b8272e7251b1760cd771f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
