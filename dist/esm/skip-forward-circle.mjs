export const name="skip-forward-circle";
export const id="dl_bc91bd587e342ef071f8";
export const url=new URL("../icons/skip-forward-circle.svg?v=f3f3f3959cb31d93ccdf51e9a2edbf89cc16d4423e35f07572bad2102816ceb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
