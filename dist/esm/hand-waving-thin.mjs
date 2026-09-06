export const name="hand-waving-thin";
export const id="dl_06573ce3c084467385ad";
export const url=new URL("../icons/hand-waving-thin.svg?v=d8cbc7b68683daa7581a7606fb3fbca4d3a21c5a2f0da71a191414ebc7b4114a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
