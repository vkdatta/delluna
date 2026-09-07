export const name="skip-back-light";
export const id="dl_3a81ccf739784f8ca546";
export const url=new URL("../icons/S/skip-back-light.svg?v=a01916dc97cc9e0f3b408af36090c24011815c1f682c9986aa559ceb267b204b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
