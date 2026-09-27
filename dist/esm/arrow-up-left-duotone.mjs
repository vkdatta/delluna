export const name="arrow-up-left-duotone";
export const id="dl_aefdf8c2cbc440f4b85f";
export const url=new URL("../icons/arrow-up-left-duotone.svg?v=e94ff2adf624981a0d0cf3897c3575d1fbdc9bca29ea7742a086ac83c83f43f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
