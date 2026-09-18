export const name="groups_2-fill";
export const id="dl_90f222770ec6451f8465";
export const url=new URL("../icons/groups_2-fill.svg?v=2505747cf0a06c37c25cf14c0a6eef09352e90a25e9db7c315b5e618117d3faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
