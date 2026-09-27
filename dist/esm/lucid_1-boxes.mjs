export const name="lucid_1-boxes";
export const id="dl_d5aaad6734fc40549dae";
export const url=new URL("../icons/lucid_1-boxes.svg?v=5468aac8537f8c350b1d69fdaca2c1a0ba7181b5ed64a9e529850346cac82323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
