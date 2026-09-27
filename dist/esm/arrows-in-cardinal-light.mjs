export const name="arrows-in-cardinal-light";
export const id="dl_6d46af38b94745f29a8f";
export const url=new URL("../icons/arrows-in-cardinal-light.svg?v=c35e7aaed8c001741cdecdda08282d0465f246d71052c95410ba85a4da75f91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
