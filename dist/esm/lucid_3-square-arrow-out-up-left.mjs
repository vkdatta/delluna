export const name="lucid_3-square-arrow-out-up-left";
export const id="dl_98205c7b82044495b083";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-left.svg?v=7595896f61952f141d6a298836b87cf12b2f907648599fc3fb344994832e7f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
