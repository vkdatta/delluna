export const name="wheelchair-motion-fill";
export const id="dl_f92a38fc66f3c6a66729";
export const url=new URL("../icons/wheelchair-motion-fill.svg?v=69f9d6be50546b7b784f94889acffca847c4f23727dacb36e0ac92202bbac6ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
