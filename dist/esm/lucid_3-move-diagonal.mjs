export const name="lucid_3-move-diagonal";
export const id="dl_7f2e95cac28442d49bea";
export const url=new URL("../icons/lucid_3-move-diagonal.svg?v=733b9dda8b8262b47941b360cda06cb39a36261bd7f5a3596b750191ca3cc723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
