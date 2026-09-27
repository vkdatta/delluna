export const name="landscape_2_off";
export const id="dl_86ceae3c16463bb49aa1";
export const url=new URL("../icons/landscape_2_off.svg?v=f4b7fa698ad085e94db7397aafa65f4713666b66df610c92a5e69f6d2b0a3c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
