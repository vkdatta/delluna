export const name="anchor-bold";
export const id="dl_4bd846c025d54273bef3";
export const url=new URL("../icons/anchor-bold.svg?v=23a24c252f2e55080b5387a47fb37628bb3957af02376e8b6e139fdaa930cfcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
