export const name="lucid_1-blocks";
export const id="dl_8ac24224feeb48acac54";
export const url=new URL("../icons/lucid_1-blocks.svg?v=4466d92d9f360469c6fd3221cc8c4628ced8e56e3bda9fe9af81796bce4564ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
