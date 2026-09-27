export const name="file-css-duotone";
export const id="dl_b42ea5fabbd7407ba40e";
export const url=new URL("../icons/file-css-duotone.svg?v=01458d440389cfb1965efe53a9aa8f6a2e45c364744c7a35c8645552de6aeb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
