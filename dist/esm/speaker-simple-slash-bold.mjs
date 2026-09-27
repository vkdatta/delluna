export const name="speaker-simple-slash-bold";
export const id="dl_928e0f90d12ebd23c378";
export const url=new URL("../icons/speaker-simple-slash-bold.svg?v=647ce226ce7bd5bdf430eefcbe6b93be2073a9758743fbb2970e097dadb90631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
