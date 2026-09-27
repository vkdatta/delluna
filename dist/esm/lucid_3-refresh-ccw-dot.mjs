export const name="lucid_3-refresh-ccw-dot";
export const id="dl_2b1dfe63e14842f48530";
export const url=new URL("../icons/lucid_3-refresh-ccw-dot.svg?v=3ed8e2e93ad009d88e4c646d4f6d7f76013840239bef2656d5cba73f5d06c21b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
