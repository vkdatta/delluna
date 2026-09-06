export const name="magnet-bold";
export const id="dl_7f41931ddb3a4bb3836f";
export const url=new URL("../icons/magnet-bold.svg?v=8f2b700696fa755437dfa1a6458a63ed89c337deffd715855800ebe8132ee59b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
