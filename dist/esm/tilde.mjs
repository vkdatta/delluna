export const name="tilde";
export const id="dl_11bc108e81e9f8d8a0eb";
export const url=new URL("../icons/tilde.svg?v=9819732396cbfff565d12e403c751a6e302b6c8f02e9a443a1a50ff4b3ef5d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
