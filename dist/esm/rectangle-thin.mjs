export const name="rectangle-thin";
export const id="dl_f445e38a1b4d404a8a7a";
export const url=new URL("../icons/rectangle-thin.svg?v=9a277a213422226413eae2bba06ec21dd5bcdc9b3821e547cda0aa299124832f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
