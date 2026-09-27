export const name="side_navigation-fill";
export const id="dl_66f8529d1ff8af44009c";
export const url=new URL("../icons/side_navigation-fill.svg?v=b394a21022e5bfc276db04f7c6bd10c4d850e56c46a399c47d99215f4ee72581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
