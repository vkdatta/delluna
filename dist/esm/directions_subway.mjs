export const name="directions_subway";
export const id="dl_1c5a3734314ed98b1191";
export const url=new URL("../icons/directions_subway.svg?v=ce740bb993319fa92ef3e800892b4c8f2b4ae23aaa17140318141aa205a29952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
