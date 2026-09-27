export const name="caret-right-light";
export const id="dl_312a718167724ce1a780";
export const url=new URL("../icons/caret-right-light.svg?v=2d80676b2988e3c2321a46da0eef42684fd5ae922eb165d70f50aecf13b3de44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
