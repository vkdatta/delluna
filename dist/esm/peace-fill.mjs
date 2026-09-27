export const name="peace-fill";
export const id="dl_e5fc9be6bb414b2b8505";
export const url=new URL("../icons/peace-fill.svg?v=1257987f05ae60b0ca88ac8b78ca88ce11c3ca4a4300568ea87b055001f3e083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
