export const name="tenancy";
export const id="dl_c1969455b0ca5aa3de89";
export const url=new URL("../icons/tenancy.svg?v=29cb23327d21f8c8474de4f870c240a6dfb22d75474805dd63c8389dcc2b6513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
