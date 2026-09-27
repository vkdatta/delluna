export const name="square-power";
export const id="dl_e0e9f3c2255446c89e79";
export const url=new URL("../icons/square-power.svg?v=4570a2b314c1e96fbfbbc8e93018a241f95779626a13f79169fd8f44b8c57eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
