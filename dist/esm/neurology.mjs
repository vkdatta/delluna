export const name="neurology";
export const id="dl_0d0cb97073464168a250";
export const url=new URL("../icons/neurology.svg?v=437e7788f570e366a7ab0e77be125d68471cced5cf54737a01051188bb0d7d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
