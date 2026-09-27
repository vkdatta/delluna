export const name="credit_score";
export const id="dl_cb57bc6f03da7617f7df";
export const url=new URL("../icons/credit_score.svg?v=0358b21ccd8ca7eeee622940409ded7913100d6a82a2d2517a2e6a71b3efb420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
