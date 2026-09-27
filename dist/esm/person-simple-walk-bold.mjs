export const name="person-simple-walk-bold";
export const id="dl_48003e3c17034db99cde";
export const url=new URL("../icons/person-simple-walk-bold.svg?v=38185a4cbd8d2c50c6d0ec6b48856584230a8c52ca6d71434a41b989443a8b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
