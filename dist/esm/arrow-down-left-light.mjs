export const name="arrow-down-left-light";
export const id="dl_6701193f0e1f448bb552";
export const url=new URL("../icons/arrow-down-left-light.svg?v=c2cf17acdd26b33eb687903ab51da5d488b37304837116d5a61c48d7bcf7a0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
