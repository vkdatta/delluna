export const name="fluid_med";
export const id="dl_a577ccffb271868ce4e5";
export const url=new URL("../icons/fluid_med.svg?v=2b0a90707b6c0d6861e02c795dee7c70e9dcb27a4575e04f456915716db6ebbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
