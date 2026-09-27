export const name="stairs";
export const id="dl_fd8dce250473d2d49a98";
export const url=new URL("../icons/stairs.svg?v=7fa3370acae332d187980027edee9167346864f1a633ec5e7d8dd92e8fed16c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
