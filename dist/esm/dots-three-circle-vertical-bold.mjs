export const name="dots-three-circle-vertical-bold";
export const id="dl_e553bddc9b8d4ce289df";
export const url=new URL("../icons/dots-three-circle-vertical-bold.svg?v=28d5655010ed3761b0761760bd4526a5fb55dd1a1404942ca892dbbfbdb6f03f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
