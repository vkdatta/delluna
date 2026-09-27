export const name="sphere-bold";
export const id="dl_d39b7cfb3c80988b4640";
export const url=new URL("../icons/sphere-bold.svg?v=770856b403b3d3429eb95ea7667eb85874e1c07c2352e8bd34edf90b23ccfba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
