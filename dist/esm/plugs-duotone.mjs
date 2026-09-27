export const name="plugs-duotone";
export const id="dl_0b747fa43c45462196c1";
export const url=new URL("../icons/plugs-duotone.svg?v=38694534b1620aac119f969981e205c1ab243cc8179d985ee33301b895d1e6ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
