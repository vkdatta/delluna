export const name="file_save";
export const id="dl_ecfbc528f1f400012ba8";
export const url=new URL("../icons/file_save.svg?v=0f4ed7d1e530664f5c77833ae68f22857b1ed7008d7ed2ea86b6570715926f18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
