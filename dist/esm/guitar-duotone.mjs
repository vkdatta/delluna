export const name="guitar-duotone";
export const id="dl_22fce0380f774373b77e";
export const url=new URL("../icons/guitar-duotone.svg?v=f2da8f61361a8a54168ad7732ae65f0aacb88bf7919e386ca00ad7e2effc75a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
