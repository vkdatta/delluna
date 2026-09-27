export const name="lucid_2-files";
export const id="dl_0c796e09992241f1b579";
export const url=new URL("../icons/lucid_2-files.svg?v=0dc24abd03de3e27b9f7401328111477f7e934151bc6547d915c8cdd852fd47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
