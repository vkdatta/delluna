export const name="arrow-bend-right-down";
export const id="dl_5f491656cedf4fe5ae22";
export const url=new URL("../icons/arrow-bend-right-down.svg?v=2b1913c29f3532d6ecb751bdbd8c8b69080a6af1f9ee4fef7f22589645e839f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
