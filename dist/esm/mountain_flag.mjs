export const name="mountain_flag";
export const id="dl_72a16c8e2ba9f48b6e56";
export const url=new URL("../icons/mountain_flag.svg?v=81750cb362610db03dd2db30f1042d465cbd9983e9adf97180357d27f98fa1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
