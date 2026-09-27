export const name="align-right-bold";
export const id="dl_13b322bc236f4c11912a";
export const url=new URL("../icons/align-right-bold.svg?v=7a1787fad650edd3bd0f6eb5465f8525a4ba52515d2902876ad9c65ddb2064f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
