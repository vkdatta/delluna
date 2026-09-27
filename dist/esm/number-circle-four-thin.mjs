export const name="number-circle-four-thin";
export const id="dl_e1c70b34ee114bc392ee";
export const url=new URL("../icons/number-circle-four-thin.svg?v=daaceb187ae07719e4bb820ac86d0f41b8ae5dc2420cb09362e71dcf2ad37811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
