export const name="battery-vertical-medium-fill";
export const id="dl_fc49dc40225b42fa92bf";
export const url=new URL("../icons/battery-vertical-medium-fill.svg?v=f93765a7f85beead9e7af5c2ddeb01a4f298e875e91c062c22945bdd734ef9fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
