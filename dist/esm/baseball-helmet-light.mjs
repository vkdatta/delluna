export const name="baseball-helmet-light";
export const id="dl_6d34bd38a092452d8cfa";
export const url=new URL("../icons/baseball-helmet-light.svg?v=a55f3554e0608dd06fa60e24a9873017c23ef94b30ccd770252780a1d98aa96d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
