export const name="not-member-of-thin";
export const id="dl_17ad57911dbc4ccea504";
export const url=new URL("../icons/not-member-of-thin.svg?v=2b4bef60081b51920b8e5e284a1a85c6959c59a196e389aa1a04fafd74b6a52f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
