export const name="figma-logo-bold";
export const id="dl_a99eaec7ac4c4db3a39e";
export const url=new URL("../icons/figma-logo-bold.svg?v=e87cf342128784a44107d7403ac5ba7aac61b3189ddf8c0df7046e82aed8df4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
