export const name="developer_board-fill";
export const id="dl_203ff14d1f0ac9822427";
export const url=new URL("../icons/developer_board-fill.svg?v=84576875ee0e80b037be4f65e5170c9919cede7982fa3045d59f37edb1ece339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
