export const name="navigation-arrow-light";
export const id="dl_079282456aea4d88944b";
export const url=new URL("../icons/navigation-arrow-light.svg?v=eeac3ee221b5379ac4f1f3a7583b90bb59b023a5a4929457158545f2850ba63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
