export const name="smiley-thin";
export const id="dl_00e30dbdffef5c6e0cab";
export const url=new URL("../icons/smiley-thin.svg?v=375dc04e961ab8a4019d928841fe2ba82cbfd5a0145ceb98ebbba396fee7ed9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
