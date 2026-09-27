export const name="lucid_3-puzzle";
export const id="dl_3b0c7b7a484c4e6e8251";
export const url=new URL("../icons/lucid_3-puzzle.svg?v=db7f8621f9abf9931e2d28f890b0032792c6699155f65d0ebc6ffc55f9d5d0fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
