export const name="boat-bold";
export const id="dl_a3c59d004690494bb991";
export const url=new URL("../icons/boat-bold.svg?v=a8d20331e21deabe95d7f38d6c59b6a36f293d5645edb7bbc3d3a6c53992433d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
