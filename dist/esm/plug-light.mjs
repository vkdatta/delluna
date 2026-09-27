export const name="plug-light";
export const id="dl_0d3f583a864d4df2a921";
export const url=new URL("../icons/plug-light.svg?v=ce2c799346e7d3863bd0e77302ebf089da10b743790d72d67cb1ba2d18053b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
