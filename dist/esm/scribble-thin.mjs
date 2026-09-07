export const name="scribble-thin";
export const id="dl_6408b1db5d1141ceadad";
export const url=new URL("../icons/S/scribble-thin.svg?v=ba115ea7bb144a93bda1f783d7e38591ef7f9d2fffe9317aba071190b89052ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
