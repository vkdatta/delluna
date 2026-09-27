export const name="scooter-thin";
export const id="dl_a1e8e0e67ac69ba5bb1c";
export const url=new URL("../icons/scooter-thin.svg?v=4d3b6070fde1d9288bf4da9d9677d19236908daa16447162443eba0b3227063e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
