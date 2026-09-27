export const name="femur_alt";
export const id="dl_730b6a837e42207b4bf5";
export const url=new URL("../icons/femur_alt.svg?v=8f8aca5df9763938faf182f8e337bc49f2372b62b0ff8c73e884af73cae65ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
