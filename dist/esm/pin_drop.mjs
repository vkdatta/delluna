export const name="pin_drop";
export const id="dl_c19d6ecb0d8973e78baa";
export const url=new URL("../icons/pin_drop.svg?v=6e18b7d4e4a31d62e95567b48aeafb9d44d507bae7bc3b9430ae6cdd8a2dc8f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
