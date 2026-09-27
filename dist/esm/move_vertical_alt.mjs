export const name="move_vertical_alt";
export const id="dl_afd23d248c1ea8c505c5";
export const url=new URL("../icons/move_vertical_alt.svg?v=d0bae5600fb53b7dd20633e72c77053306ef6dc9f8d4cda93fc78fb13da8e68c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
