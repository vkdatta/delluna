export const name="local_dining-fill";
export const id="dl_7471bebf37409c08c946";
export const url=new URL("../icons/local_dining-fill.svg?v=95f6f51898f07ebf6f05ca2c224d553ada32333e22e94063ac51483ad6b7025d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
