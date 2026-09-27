export const name="towel";
export const id="dl_19ddb815b30c95d2c505";
export const url=new URL("../icons/towel.svg?v=7be03bb8b13a9bdcb825760365059bc7b043ee1b44fbb18769b3815d2c2d7004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
