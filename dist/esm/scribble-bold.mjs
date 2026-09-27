export const name="scribble-bold";
export const id="dl_04a2b0c1fe96ea75fc4f";
export const url=new URL("../icons/scribble-bold.svg?v=9cf7222808c9e98e02d7a36e6bd1cd397724161719ade153dce3ac072143473d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
