export const name="flashlight_off-fill";
export const id="dl_cd2adcab9f954c019491";
export const url=new URL("../icons/F/flashlight_off-fill.svg?v=593b163af3fc2840f6f45371df8e8ec0cf725aca7e3ef3397aaf65da5df1b017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
