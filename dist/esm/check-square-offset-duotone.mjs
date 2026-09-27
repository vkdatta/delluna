export const name="check-square-offset-duotone";
export const id="dl_4702fded57124b20ae84";
export const url=new URL("../icons/check-square-offset-duotone.svg?v=a192f7c434a04e58b3f8b7721096c0b4d86edcddc5f0b6a1b09950becfc99645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
