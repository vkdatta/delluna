export const name="thumbs-down-fill";
export const id="dl_97794b2a20ef4d8f9ba8";
export const url=new URL("../icons/T/thumbs-down-fill.svg?v=e42815ad1a4e3c1bccbec981219922bb7197b6642291a89d262d64224d87d7b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
