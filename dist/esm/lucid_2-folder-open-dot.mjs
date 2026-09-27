export const name="lucid_2-folder-open-dot";
export const id="dl_8e4516a25fe848bba119";
export const url=new URL("../icons/lucid_2-folder-open-dot.svg?v=fabb06e3887658449b5bf89cb9e899c2fd80fd38fef6371190c3a4bf0ff6953f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
