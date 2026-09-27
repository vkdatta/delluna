export const name="lucid_3-nut";
export const id="dl_15afbf7964894214a0f0";
export const url=new URL("../icons/lucid_3-nut.svg?v=c62700b362f67725a8753631bbd85c0e56a347211d9a315bfaa420c5c751b668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
