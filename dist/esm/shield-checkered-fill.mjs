export const name="shield-checkered-fill";
export const id="dl_4cbb0ac224a42cf3f355";
export const url=new URL("../icons/shield-checkered-fill.svg?v=cea76c31671b5108981e2dc8c5f2297bdd83470f557965f0792b632a2b9c9c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
