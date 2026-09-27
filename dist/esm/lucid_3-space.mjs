export const name="lucid_3-space";
export const id="dl_2ef440957c074b359e00";
export const url=new URL("../icons/lucid_3-space.svg?v=3ce123d7c6b5871e822605122ae9c8455a64137d71078c631a4a4491d21b6b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
