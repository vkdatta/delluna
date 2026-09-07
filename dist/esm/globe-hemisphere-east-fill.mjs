export const name="globe-hemisphere-east-fill";
export const id="dl_62ef21cdaeba4a4cba41";
export const url=new URL("../icons/globe-hemisphere-east-fill.svg?v=2d566a10ab1e3b6a4a21133b9732e2cf278a1b769f9e89aebf29697b93fe7432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
