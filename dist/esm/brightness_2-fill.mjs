export const name="brightness_2-fill";
export const id="dl_1438c62dfd25fa165926";
export const url=new URL("../icons/brightness_2-fill.svg?v=c86efcab2b7f3af2effca1296adddef2926d6172a1d68648ee8159eb85167619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
