export const name="ring_volume";
export const id="dl_8f2f7db14381f406127f";
export const url=new URL("../icons/ring_volume.svg?v=1d6eedb689b7894c8d1087deedadf6895e32991fa73433185f4a3a107bfff996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
