export const name="close_small";
export const id="dl_1b96addb31d9a1614538";
export const url=new URL("../icons/close_small.svg?v=6467c327821c1b38f97d60ac619bae3ff3b850ecdab8569d9fc1b769e98b1d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
