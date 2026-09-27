export const name="text-italic-bold";
export const id="dl_9893fc311162b99767fe";
export const url=new URL("../icons/text-italic-bold.svg?v=019713167768e4a21334393c590816a14a9bed6faa70a9d8f8b2a0f6ee30f5bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
