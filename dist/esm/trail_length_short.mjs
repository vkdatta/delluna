export const name="trail_length_short";
export const id="dl_3416be1cbeaf316f7b87";
export const url=new URL("../icons/trail_length_short.svg?v=b08ca7bc59db75554e793bcdd2f133a369b796aa3fbb4e22ca54dc534a98e047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
