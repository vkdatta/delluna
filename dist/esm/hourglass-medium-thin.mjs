export const name="hourglass-medium-thin";
export const id="dl_820d5ade8a674ee1b96a";
export const url=new URL("../icons/hourglass-medium-thin.svg?v=c87127d5c6f838db6e50f2d207a9b8c5cc4e14e20f05472c75ffac22e68d9a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
