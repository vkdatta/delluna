export const name="text-align-left-bold";
export const id="dl_461235405b42cf8dd9c8";
export const url=new URL("../icons/text-align-left-bold.svg?v=fd8f887828f7aadc236a24f35111d703b47625d590eff50611f4acd39f92b398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
