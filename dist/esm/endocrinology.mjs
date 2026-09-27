export const name="endocrinology";
export const id="dl_22e769dd065aa2fddfbd";
export const url=new URL("../icons/endocrinology.svg?v=c77db512362b790ab8eaacebb29cf1329fb65495b8521585151e95ca839cacc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
