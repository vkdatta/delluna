export const name="subway-thin";
export const id="dl_39198ae518fb4c3fb122";
export const url=new URL("../icons/S/subway-thin.svg?v=fd525d1dd99e1d885d7480c22e06c4db6b0e5ba27fbdcf18c084e1275005946a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
