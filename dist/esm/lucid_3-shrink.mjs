export const name="lucid_3-shrink";
export const id="dl_1547d5f02fdf4c438c5b";
export const url=new URL("../icons/lucid_3-shrink.svg?v=094ce4242634f3efe83dd2c32db2f15de1205556557d6df37a186615737b416b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
