export const name="lucid_2-folder-output";
export const id="dl_d3ed441724204107b422";
export const url=new URL("../icons/lucid_2-folder-output.svg?v=fabefc372f1424dfb0f231a272b7ee8b4a4603876d719514947de003ca903000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
