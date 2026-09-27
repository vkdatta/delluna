export const name="unite-square-thin";
export const id="dl_c32d768ce15b9d95f024";
export const url=new URL("../icons/unite-square-thin.svg?v=cdcdb1b5b48eec6c2c50a5f615e8eba62e1bb1eb3aa30a7e32bb68a8c607c744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
