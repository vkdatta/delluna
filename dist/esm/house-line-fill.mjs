export const name="house-line-fill";
export const id="dl_8573691a8e7140979bcd";
export const url=new URL("../icons/house-line-fill.svg?v=49604b07e34aecf9158da7a711938c216b33328874beeea814321fb040e905d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
