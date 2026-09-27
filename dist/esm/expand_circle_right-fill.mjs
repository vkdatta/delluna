export const name="expand_circle_right-fill";
export const id="dl_9a1b76923ae08daec3a8";
export const url=new URL("../icons/expand_circle_right-fill.svg?v=d290f2fc94f7854fd06c180033f495bcaf1d8663de520b9f5c87d310b799d240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
