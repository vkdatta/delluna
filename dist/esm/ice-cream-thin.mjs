export const name="ice-cream-thin";
export const id="dl_733e587f11ef46699f95";
export const url=new URL("../icons/ice-cream-thin.svg?v=a1cf001f6eb55cbb568d78b82d94e40e5b4a361eefbe68c9b56c456f4d349b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
