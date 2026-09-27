export const name="soundcloud-logo-light";
export const id="dl_dfb3302aa17ae8d1c7b4";
export const url=new URL("../icons/soundcloud-logo-light.svg?v=e0668c61f091f072c761633995a4441ba6cfa73a311b5219ea1f2895c8a1b5b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
