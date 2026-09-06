export const name="lucid_1-chevrons-left";
export const id="dl_bb40b34ea33544219b02";
export const url=new URL("../icons/lucid_1-chevrons-left.svg?v=c34a8b5db6deccbc646ddabb951e721e75db1bc14a0bd8ddd644f898005e582a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
