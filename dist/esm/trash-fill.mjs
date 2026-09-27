export const name="trash-fill";
export const id="dl_b59cccbbe9fa8a12abad";
export const url=new URL("../icons/trash-fill.svg?v=3e88e93dbc9f5f5abaaa0d47ea209b76c1be3e8c62364e405d4ec58bc495c3f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
