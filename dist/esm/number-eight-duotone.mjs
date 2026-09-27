export const name="number-eight-duotone";
export const id="dl_ab0a5d55a5324ffdb37e";
export const url=new URL("../icons/number-eight-duotone.svg?v=dc684ced32383652166ecaea4b1091d027f44d7efefa43b212ecd8e40fed4dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
