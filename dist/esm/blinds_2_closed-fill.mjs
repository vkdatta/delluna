export const name="blinds_2_closed-fill";
export const id="dl_ceac63eefad55eefdf08";
export const url=new URL("../icons/blinds_2_closed-fill.svg?v=1ac826485f21dfda1ad0a6d2cf230e3e786e0ef6fd7db1885e31118ed050b564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
