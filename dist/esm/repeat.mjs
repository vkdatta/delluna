export const name="repeat";
export const id="dl_f6c727b643144080b6ba";
export const url=new URL("../icons/repeat.svg?v=1db6e8dc86149901317f7c22e9aa060a604a1521553db066cdaffa21b6d7a899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
