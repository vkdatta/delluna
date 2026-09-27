export const name="mobile_share_stack";
export const id="dl_bb7ae97f4adc1cfd1f25";
export const url=new URL("../icons/mobile_share_stack.svg?v=8e0765487bf8aa378502d6c1ed0e97ea8371c9708dd05dd38f1d680bf9eddfe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
