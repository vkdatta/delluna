export const name="airplane-landing";
export const id="dl_a498e518759d4e948a9f";
export const url=new URL("../icons/airplane-landing.svg?v=99534a6653d4a913d56cd74430cc8658d6ced1b8b52ae4ab6a5f099424b9b5cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
