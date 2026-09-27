export const name="hallway-fill";
export const id="dl_641d1d3dfa4be70e0ab1";
export const url=new URL("../icons/hallway-fill.svg?v=4ceacbd881f4431ee79232be76b9f21c79402eaff645ec0d6996e4ea46cc0eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
