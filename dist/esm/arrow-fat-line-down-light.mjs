export const name="arrow-fat-line-down-light";
export const id="dl_e4f57b8d11e14ae7a871";
export const url=new URL("../icons/arrow-fat-line-down-light.svg?v=08ad1f7270053dda635250498e6595c18cd9011569f0ea23b10c6cb341c9f6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
