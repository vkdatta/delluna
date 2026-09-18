export const name="last_page-fill";
export const id="dl_6489773546034bfbabbb";
export const url=new URL("../icons/L/last_page-fill.svg?v=20f77728111379921fae8198aa8b3c54a1187a78f705a57ae5a22fe8389b7bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
