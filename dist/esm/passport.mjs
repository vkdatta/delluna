export const name="passport";
export const id="dl_42449888452b6ec39a2d";
export const url=new URL("../icons/passport.svg?v=8dd87a3f760b38f52ad17ccd72b895353250a1a40348b330f7f1b6eff21ae93f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
