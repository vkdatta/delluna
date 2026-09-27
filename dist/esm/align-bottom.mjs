export const name="align-bottom";
export const id="dl_6b52be5b13244d0489cd";
export const url=new URL("../icons/align-bottom.svg?v=691c2082649b149640f563e17e10bac72c286edeab1e4fa7bb1911490450733f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
