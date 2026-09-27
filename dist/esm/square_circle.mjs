export const name="square_circle";
export const id="dl_791a7add9fb3a49061ee";
export const url=new URL("../icons/square_circle.svg?v=72488a3fe2e3edf2003870e4e35ba29faf5154dc897f6fe90321967f47ed8cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
