export const name="text-h-two";
export const id="dl_91c94cfceb6855c3e24d";
export const url=new URL("../icons/text-h-two.svg?v=6396c028c8e2cc961744a3068cd1562fdb3df9dd5046ee952d0807ff71393add",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
