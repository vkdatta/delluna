export const name="arrow-elbow-left-up";
export const id="dl_878c0241197044d5b900";
export const url=new URL("../icons/arrow-elbow-left-up.svg?v=eacce9ea8bea1bc60886c4812792c09003bed711f96428a587e4ee21e3d7c4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
