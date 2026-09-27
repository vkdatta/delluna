export const name="nest_audio";
export const id="dl_842ae876062f1eee63ef";
export const url=new URL("../icons/nest_audio.svg?v=d89467a627088a3826ecd18d8c229f7bd3d4b33def59947ebf8e8319886c8003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
