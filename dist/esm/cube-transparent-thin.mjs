export const name="cube-transparent-thin";
export const id="dl_5331e7a59cd04e50b49f";
export const url=new URL("../icons/cube-transparent-thin.svg?v=59b6cbd9581fc832709608bf604137850020f9e8dc5600aa888a767228fd989f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
