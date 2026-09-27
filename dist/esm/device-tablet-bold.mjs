export const name="device-tablet-bold";
export const id="dl_94ce0a151b09433783ea";
export const url=new URL("../icons/device-tablet-bold.svg?v=069e52dd7ad6ab3a5ad791a192a713242650d770fdc19afb900566422da11e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
