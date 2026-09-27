export const name="four-k-duotone";
export const id="dl_978458b1576946b3bcb2";
export const url=new URL("../icons/four-k-duotone.svg?v=e7e53de77a4dc9259c5b2827731747c4c326f43ab857ce740dc8487d92fbe2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
