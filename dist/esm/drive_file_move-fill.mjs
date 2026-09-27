export const name="drive_file_move-fill";
export const id="dl_b1cd68c3a129bb87dd51";
export const url=new URL("../icons/drive_file_move-fill.svg?v=7b0f33e739464d59e20c100eff9615fef5ff24de391e1bce149048a1f0df3a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
