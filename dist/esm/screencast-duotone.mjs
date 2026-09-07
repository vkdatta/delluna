export const name="screencast-duotone";
export const id="dl_798d5ca57d67419a9261";
export const url=new URL("../icons/S/screencast-duotone.svg?v=9985486df892cde1d4e3a2c9df6abebaf2c81e2c5fb0fd5b733a798a2999c688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
