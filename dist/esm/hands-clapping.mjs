export const name="hands-clapping";
export const id="dl_9406634f99dc403a964d";
export const url=new URL("../icons/hands-clapping.svg?v=7cdab72cff00704e634298e09f9bdd948a0c66e84b5bbcd722b66798a10868cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
