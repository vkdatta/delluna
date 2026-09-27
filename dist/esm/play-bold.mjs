export const name="play-bold";
export const id="dl_fbaeb0c4a1c24d7b9e1f";
export const url=new URL("../icons/play-bold.svg?v=5bd405c2358436d73a830bae0643919582bc01224b3fbe36a7e850cf2fd3d252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
