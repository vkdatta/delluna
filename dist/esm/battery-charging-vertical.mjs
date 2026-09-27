export const name="battery-charging-vertical";
export const id="dl_8780c13795364063aef7";
export const url=new URL("../icons/battery-charging-vertical.svg?v=79600a9c5e278e98df1d8f9c5fecb422427e44dbd9c93b55c6cd601e866d35fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
