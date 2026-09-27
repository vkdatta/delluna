export const name="arrow-down-left";
export const id="dl_7a656e238d5b4158bd9f";
export const url=new URL("../icons/arrow-down-left.svg?v=7170cb3b8ea821ae56935e9cbf786774d4b5e96eb1396bc9713359e3816b6c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
