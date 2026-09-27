export const name="broom-fill";
export const id="dl_c3e5e79365064812b987";
export const url=new URL("../icons/broom-fill.svg?v=e3285d591652662ab4abe757c30bcd2be9f1af508bcecc80bf7b4ef9b8a2455c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
