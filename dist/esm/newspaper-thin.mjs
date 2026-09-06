export const name="newspaper-thin";
export const id="dl_226f231023a448daa575";
export const url=new URL("../icons/newspaper-thin.svg?v=fb461d2af3b0e7a54700d0f5618ea2d6b550e09470158968419ef9419d3ef13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
