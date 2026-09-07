export const name="funnel-simple-light";
export const id="dl_d37f9116094a4fa1ab52";
export const url=new URL("../icons/funnel-simple-light.svg?v=6728d9faf990b62ded96d9c6d296454770cae4871287ac25cbad22ab26dc8e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
