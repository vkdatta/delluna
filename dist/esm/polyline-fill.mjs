export const name="polyline-fill";
export const id="dl_d8e7987c3db12987c457";
export const url=new URL("../icons/polyline-fill.svg?v=dbc6a9d6dc459bc45faffe96460520b4dbe1126260da51285065912591554cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
