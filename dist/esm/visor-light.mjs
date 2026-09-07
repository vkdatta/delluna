export const name="visor-light";
export const id="dl_84e065d667f348ca943e";
export const url=new URL("../icons/V/visor-light.svg?v=deb631d8e64ab543f1f75a73e14d1614de8551f78bd06cb00369665a3a7dc741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
