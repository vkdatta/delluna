export const name="filter_vertical_alt";
export const id="dl_59da716e06c6cd73f1ab";
export const url=new URL("../icons/filter_vertical_alt.svg?v=2cd6961da5e526677586c6aaf46a2f3ebb9d15540f7b0a31b4f779fec88c82e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
