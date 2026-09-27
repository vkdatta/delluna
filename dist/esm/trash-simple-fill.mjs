export const name="trash-simple-fill";
export const id="dl_9083f240e4d44e512b03";
export const url=new URL("../icons/trash-simple-fill.svg?v=ef19579a753ed3fc21038b1ef3d15304d4a4fbc7046e7798c255e28340b88e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
