export const name="files-thin";
export const id="dl_3e45f658d1db4b18b82b";
export const url=new URL("../icons/files-thin.svg?v=2ed1aa067fe21e07d805dc53cefc2b077c0646833eb87da925b237ec91419b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
