export const name="sun-thin";
export const id="dl_79c090ed52e1ab6a1b93";
export const url=new URL("../icons/sun-thin.svg?v=c8159d0e357cd1c29bc3149ac9049c012acb3d4f7f24e3e6cd37f62212b0b548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
