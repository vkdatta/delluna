export const name="image-square-thin";
export const id="dl_bb1ea9ea1fa244ab85be";
export const url=new URL("../icons/image-square-thin.svg?v=e2de181ed69d4bbcc6d31e57cdb37b6126d13ce2a4c203c1dd31aabd47ecb148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
