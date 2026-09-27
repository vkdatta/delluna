export const name="user-focus-bold";
export const id="dl_163a4193615b3644f27a";
export const url=new URL("../icons/user-focus-bold.svg?v=f0f659359a036018f927e11f4273a6cdfe25d53199fa2cc58c9939c98c4c6a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
