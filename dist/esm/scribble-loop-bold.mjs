export const name="scribble-loop-bold";
export const id="dl_e6fa3bc4f3814ac1bd4c";
export const url=new URL("../icons/S/scribble-loop-bold.svg?v=cda16d0301f3d0d8497ca074589a1b14a1a865e6db7370e27dade85781557e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
