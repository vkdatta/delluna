export const name="fediverse-logo-bold";
export const id="dl_b9fa2ffbddf5435894d7";
export const url=new URL("../icons/fediverse-logo-bold.svg?v=67a6242bf2e7346326bb7ce80fda7c3d47f4a06b8708ce3efc067b9f070f50ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
