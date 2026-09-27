export const name="article-medium-thin";
export const id="dl_a85097c2b0f84b028cc8";
export const url=new URL("../icons/article-medium-thin.svg?v=2900cf9c06f883f92b9661db5da0c85a9508d71066ef88cdfd3ae7ef41e01bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
