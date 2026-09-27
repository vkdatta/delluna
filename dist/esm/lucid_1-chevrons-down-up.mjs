export const name="lucid_1-chevrons-down-up";
export const id="dl_701eabb04e98410ca71a";
export const url=new URL("../icons/lucid_1-chevrons-down-up.svg?v=b511e55db1a54b79388ef3431ba4e7514c49c8462d1a2d5643766a94fc39e7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
