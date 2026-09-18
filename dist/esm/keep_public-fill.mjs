export const name="keep_public-fill";
export const id="dl_14becd48f5bd40849fd3";
export const url=new URL("../icons/K/keep_public-fill.svg?v=ee03dde3cb13be347963f1d105ff89924e9808c98d817504bbc271f8457f9f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
