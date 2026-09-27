export const name="history-fill";
export const id="dl_c8d0c3dfa5172d6c1af3";
export const url=new URL("../icons/history-fill.svg?v=882e9cdbd45a915c46aa1b7e3080642e24351b6aca101633aa53d60b4bc9f033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
