export const name="stop-circle-duotone";
export const id="dl_4c0895206c2ef9ee6907";
export const url=new URL("../icons/stop-circle-duotone.svg?v=f53a3feff17d7e11a4bab38735c026cf23d4497539f7c64f252c43ba19319af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
