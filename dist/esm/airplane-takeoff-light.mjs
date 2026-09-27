export const name="airplane-takeoff-light";
export const id="dl_83665a19ecb349f5aadd";
export const url=new URL("../icons/airplane-takeoff-light.svg?v=c4c341f9db737b5704ba7f377b6d0090c651755c734665c3d41a3926543f7d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
