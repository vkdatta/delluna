export const name="door_sliding-fill";
export const id="dl_86508b2f120a81192f77";
export const url=new URL("../icons/door_sliding-fill.svg?v=351653fda15233389cf11bb56fbb0b396376d58509773ef1669872d93fcc2cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
