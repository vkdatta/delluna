export const name="link-simple-break-light";
export const id="dl_39c78a0346a14d4eb3ea";
export const url=new URL("../icons/link-simple-break-light.svg?v=ba26893e548fb9312ce6af15795eb13d713e5a7bc275932ce90289a29c8f199a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
