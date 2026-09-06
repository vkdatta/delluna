export const name="align-bottom-simple-duotone";
export const id="dl_7fd1fb5c28f341db828e";
export const url=new URL("../icons/align-bottom-simple-duotone.svg?v=caddd39d22afc41f14fd5689c55455e57f4b9f62e2be3fbd90316cb1d43cf64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
