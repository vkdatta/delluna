export const name="buildings";
export const id="dl_fa2a6cca20814b51ad0d";
export const url=new URL("../icons/buildings.svg?v=76f3325b87588fc6786953e8b964d5b7cae58983b3dc1399f7b7a672a6c1b553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
