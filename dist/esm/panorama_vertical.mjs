export const name="panorama_vertical";
export const id="dl_81d93a6d25a9fd437cb1";
export const url=new URL("../icons/panorama_vertical.svg?v=47667b393936a983841bb9ba61b4015cd58d6b85133c7ee4b698de59d3f94347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
