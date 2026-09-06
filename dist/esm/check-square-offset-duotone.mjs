export const name="check-square-offset-duotone";
export const id="dl_4702fded57124b20ae84";
export const url=new URL("../icons/check-square-offset-duotone.svg?v=0bc8e1ec180f5792271799e0dff16a94ba639f5aa8f0ec1bba266fc86c613493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
