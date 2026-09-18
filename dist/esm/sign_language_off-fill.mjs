export const name="sign_language_off-fill";
export const id="dl_81b0356bbf144d6ab537";
export const url=new URL("../icons/sign_language_off-fill.svg?v=483f632c97cdb30fa31496b0fc082295d9e7b1c9d95cb0842a731f23e75a9f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
