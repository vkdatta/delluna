export const name="label-fill";
export const id="dl_51fb7f251a8e0236754f";
export const url=new URL("../icons/label-fill.svg?v=6439da09618d97ed1ffa9e121b49c29a87c3f03ae9d700790de6928b39007bee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
