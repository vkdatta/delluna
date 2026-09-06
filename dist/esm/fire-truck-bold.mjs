export const name="fire-truck-bold";
export const id="dl_14e03df66d9c48b3ac57";
export const url=new URL("../icons/fire-truck-bold.svg?v=98ceb57e15f5ccd6d0ea6cd4eb09a80d2f57ea811f04e43bae7e119a9455ee47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
