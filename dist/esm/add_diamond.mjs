export const name="add_diamond";
export const id="dl_283f27613b6a4fabbcf5";
export const url=new URL("../icons/add_diamond.svg?v=83a665fbd549466ed64cb043e6df26c374986dbda4e54350092c39e3fbbc0569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
