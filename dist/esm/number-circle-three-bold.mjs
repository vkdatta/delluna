export const name="number-circle-three-bold";
export const id="dl_b20e1352aa8c4be194b4";
export const url=new URL("../icons/number-circle-three-bold.svg?v=e0ef9cd3c1c9eb97ddb920a65e775a99f046b0a35971265138ac9f0e3442dd7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
