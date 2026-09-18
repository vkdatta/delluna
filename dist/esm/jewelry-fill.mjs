export const name="jewelry-fill";
export const id="dl_d9950fc4f6f340498ed6";
export const url=new URL("../icons/jewelry-fill.svg?v=f0e834d86e05d487114f3cb4852d97b710c738423da4a7d62031472ea953dd71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
