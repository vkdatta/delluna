export const name="arrows-down-up-fill";
export const id="dl_7267673964e74953b1cb";
export const url=new URL("../icons/arrows-down-up-fill.svg?v=f454333f30a47f3ed6dcbd2691913dec6876bd6e77a507da5f5cb14cbb297762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
