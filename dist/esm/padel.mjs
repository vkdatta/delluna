export const name="padel";
export const id="dl_d5ab1ab8f58801d0b86d";
export const url=new URL("../icons/padel.svg?v=bd5020e6110ab4ce6800fe3b336fe0b2dcda99242c199b7f73c10840136026a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
