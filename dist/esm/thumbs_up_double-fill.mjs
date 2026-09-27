export const name="thumbs_up_double-fill";
export const id="dl_2b687c683234dfe61a3f";
export const url=new URL("../icons/thumbs_up_double-fill.svg?v=e8e3767e040419ed49dd505005ccfba791fd5af035da0f845ec49c746066f890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
