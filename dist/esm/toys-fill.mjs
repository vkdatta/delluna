export const name="toys-fill";
export const id="dl_db7e22c17748c00e0a34";
export const url=new URL("../icons/toys-fill.svg?v=61741b48cd07d2757e05fbb2e277b1dea6192358e14a8b0187d968874276c878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
