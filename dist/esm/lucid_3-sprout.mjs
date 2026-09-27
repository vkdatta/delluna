export const name="lucid_3-sprout";
export const id="dl_e97635c1778e4ea09704";
export const url=new URL("../icons/lucid_3-sprout.svg?v=299f94c4ad7a46ec33f17c52d50df79a75cc630262f1eb1cab00c5ed41c1b76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
