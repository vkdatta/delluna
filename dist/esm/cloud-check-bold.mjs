export const name="cloud-check-bold";
export const id="dl_bb7d2f5d397a4357a5a3";
export const url=new URL("../icons/cloud-check-bold.svg?v=20bff91666fd3ecd64b0049c549145086c75ce41cabd28baf8ad01b948bc4ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
