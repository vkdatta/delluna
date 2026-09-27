export const name="arrow-bend-down-right-light";
export const id="dl_6864e7d17bf64648ba3c";
export const url=new URL("../icons/arrow-bend-down-right-light.svg?v=9c30b84e8191a5337fde3b3008d7207a5109050dd13c85a85f4f5f7390e94c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
