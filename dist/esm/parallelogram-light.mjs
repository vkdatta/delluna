export const name="parallelogram-light";
export const id="dl_cd0d7da48cf14c0380a9";
export const url=new URL("../icons/parallelogram-light.svg?v=6716953f7c8c3a71d5479b2966b2ef9a934d96fb977176cae5c49671777d4b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
