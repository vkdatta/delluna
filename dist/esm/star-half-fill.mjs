export const name="star-half-fill";
export const id="dl_09dad17a5f10f0692d4c";
export const url=new URL("../icons/star-half-fill.svg?v=acd8cb5bf77318f97559823326010510601e76a3368314bafa1fd1b0b3df4b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
