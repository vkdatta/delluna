export const name="trees";
export const id="dl_be6bf339c27e48288952";
export const url=new URL("../icons/trees.svg?v=02013b1249842a2eaabaed2340f015f31bb39d0b08147ce78fe29743f7403d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
