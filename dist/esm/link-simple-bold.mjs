export const name="link-simple-bold";
export const id="dl_43814c2474824f589f56";
export const url=new URL("../icons/link-simple-bold.svg?v=195f6728f3a48b7b2c0085995d84f993275f761f1580950401689198c30b88dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
