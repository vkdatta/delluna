export const name="bulldozer-duotone";
export const id="dl_364d4cebaae44e838828";
export const url=new URL("../icons/bulldozer-duotone.svg?v=589aca197d4be398e8e0ba2d2a691f48f41a6bf7bcdcd2dd354297307f9ac601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
