export const name="first-aid-kit-fill";
export const id="dl_fae235eeaf144554908b";
export const url=new URL("../icons/first-aid-kit-fill.svg?v=a8377471d33bd7ccc6847495b882ce13987e0c4a70baa77bcc6cb768e9643897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
