export const name="qr_code-fill";
export const id="dl_66c66cb80ba01d843234";
export const url=new URL("../icons/qr_code-fill.svg?v=82e93522b6a59497f7c2195731126a588cc1fa02544f14e1dafc39645a64ab1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
