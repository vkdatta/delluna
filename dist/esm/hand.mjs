export const name="hand";
export const id="dl_1ba6eb4e04494e50bea4";
export const url=new URL("../icons/hand.svg?v=f3d6b649811a9cd186ddab111dcc19a888c646c6f48ed2643a202901451f02ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
