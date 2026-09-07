export const name="tree-evergreen-bold";
export const id="dl_f3bf86dd1a194d729628";
export const url=new URL("../icons/T/tree-evergreen-bold.svg?v=731d27b550cce8512fe29cb02c8811e7099055e0aa35964a722aa55663ea0f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
