export const name="smiley-blank";
export const id="dl_bb4cceb49b644f6e9ac8";
export const url=new URL("../icons/S/smiley-blank.svg?v=9b3820ce19323b4c9ae91c8c1675ae0300985cfa17c125745c69739b629b14ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
