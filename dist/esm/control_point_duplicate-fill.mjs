export const name="control_point_duplicate-fill";
export const id="dl_37b1af638d4f70567434";
export const url=new URL("../icons/control_point_duplicate-fill.svg?v=765be4732405802f8434b63dec1869af86494f9b4146de8cda6ae1ed3d2017fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
