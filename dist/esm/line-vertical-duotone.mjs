export const name="line-vertical-duotone";
export const id="dl_e62647e5f4cb43b59734";
export const url=new URL("../icons/line-vertical-duotone.svg?v=58b8a586ff013c209aba65ba0453a026dec7c158d5cc203c12494b37a5a5bdf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
