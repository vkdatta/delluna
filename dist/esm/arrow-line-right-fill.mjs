export const name="arrow-line-right-fill";
export const id="dl_f86875a0f0fb440ebe54";
export const url=new URL("../icons/arrow-line-right-fill.svg?v=104ddf1866e939bfa3b72c372787bfe614538537feae6c140f339837fb0f22d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
