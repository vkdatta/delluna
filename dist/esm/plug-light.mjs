export const name="plug-light";
export const id="dl_0d3f583a864d4df2a921";
export const url=new URL("../icons/plug-light.svg?v=4a6d995b7bf6d1cc3c470abee0ee234bbe60a715798b4b2a12070369d3eba095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
