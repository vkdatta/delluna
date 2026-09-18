export const name="stroller-fill";
export const id="dl_6fcc9dd8450745c49b61";
export const url=new URL("../icons/stroller-fill.svg?v=f009fb56d01e6ec11969641207dc1050c334bb361808c6b3880b4b554fb9535b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
