export const name="today";
export const id="dl_10acdd4fe3ec4b6d6bac";
export const url=new URL("../icons/today.svg?v=27299a092c55aee9bd6f91a1d1beef25fc03acbbc8d02946e942e5cbbc51777a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
