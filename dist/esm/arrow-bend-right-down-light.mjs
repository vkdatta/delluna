export const name="arrow-bend-right-down-light";
export const id="dl_344246fa73d9461f91df";
export const url=new URL("../icons/arrow-bend-right-down-light.svg?v=318a84d41111f07c850533fa082aa7e8480fef8587c54dc0add625c26cb035a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
