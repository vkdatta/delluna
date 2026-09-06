export const name="racquet-duotone";
export const id="dl_87bbb94eefc847e49add";
export const url=new URL("../icons/racquet-duotone.svg?v=f0c9b6813898473771c047c4a9d64ae988f8f646689e3cf19bf8f265db617995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
