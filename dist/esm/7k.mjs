export const name="7k";
export const id="dl_f13e028bf0404fdb67d2";
export const url=new URL("../icons/7k.svg?v=d2ef96a4b16233f1063cb07cd4d8ad5b8650464a55405b37ad8b8e541998a14d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
