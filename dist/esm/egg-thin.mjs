export const name="egg-thin";
export const id="dl_bf4f193b47aa4ae1ad74";
export const url=new URL("../icons/egg-thin.svg?v=3d122d89b95ab00f43d2c10b079b50b1d79b577e92c1a3fb774c8088df604ef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
