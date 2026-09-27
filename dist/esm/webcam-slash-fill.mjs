export const name="webcam-slash-fill";
export const id="dl_c2660181742c1fd9b0fe";
export const url=new URL("../icons/webcam-slash-fill.svg?v=3d638f90ed86e22b3edb26a284abe153cfc87bbd4ed5e4e2dac071cd7674a9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
