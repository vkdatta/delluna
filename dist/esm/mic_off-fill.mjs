export const name="mic_off-fill";
export const id="dl_7764118f09dd4886af97";
export const url=new URL("../icons/M/mic_off-fill.svg?v=f0176c61bc9ee892b8f52d9e12326d4a11b4710760b480129ebe0c0d07e95fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
