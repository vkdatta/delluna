export const name="file-md-fill";
export const id="dl_7308cc0789dc42a899f2";
export const url=new URL("../icons/file-md-fill.svg?v=93c03f6391075abc04cf79f57ee611e7403f911bb71a55f7f07f7f9152cf65b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
