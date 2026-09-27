export const name="train-track";
export const id="dl_07d631d9d8404feba620";
export const url=new URL("../icons/train-track.svg?v=24e120be8b1db25d44df8515f1470a8e07195323b7973ff77385d4b65eea2dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
