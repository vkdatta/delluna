export const name="universal_local-fill";
export const id="dl_0c91b612255b420e8087";
export const url=new URL("../icons/U/universal_local-fill.svg?v=b383d490aa33c9771c2827f44253336c785cc1ec1f03c05f34639d864f4e1d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
