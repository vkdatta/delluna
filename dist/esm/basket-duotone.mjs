export const name="basket-duotone";
export const id="dl_9d8e0e33c97b44988e38";
export const url=new URL("../icons/basket-duotone.svg?v=cfad1508b598af11b5f651176b72bdfe5468fa5ac629dcb54f5e2fa732dc20c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
