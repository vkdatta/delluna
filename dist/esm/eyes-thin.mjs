export const name="eyes-thin";
export const id="dl_d4efa106e1fe45cd9f10";
export const url=new URL("../icons/eyes-thin.svg?v=4c78a266ac13ca603b067ae1d8b6348f6c7f68aa6d528b30956be4fd12cd360f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
