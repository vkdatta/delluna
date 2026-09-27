export const name="lucid_2-flag-triangle-right";
export const id="dl_d78ba72fc5a84b429566";
export const url=new URL("../icons/lucid_2-flag-triangle-right.svg?v=658ddee9a32d453aead199ffa80f140e0b09a4ee2bc21fcd6c45ff0bb4df59b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
