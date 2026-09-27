export const name="speaker-x-thin";
export const id="dl_2ce76b04d47be079be64";
export const url=new URL("../icons/speaker-x-thin.svg?v=938745a3fd84e0e4d569ed01a5249757959b77822f507407261f3413a13c7d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
