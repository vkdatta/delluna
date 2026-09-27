export const name="password-bold";
export const id="dl_5b5053e097914cb4bf91";
export const url=new URL("../icons/password-bold.svg?v=514c13aca44756acda5afc796bee59a245c556d51f1dc0d9317f2001ad6d8794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
