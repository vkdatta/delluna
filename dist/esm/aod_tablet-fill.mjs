export const name="aod_tablet-fill";
export const id="dl_9dbf0e716c0c4a0eba6e";
export const url=new URL("../icons/A/aod_tablet-fill.svg?v=8d597aa3be9f0fc6407d397ad57faaa3daa2743536acba6730c24aea7b619591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
