export const name="lucid_3-slash";
export const id="dl_84c8a399d0224beb92e9";
export const url=new URL("../icons/lucid_3-slash.svg?v=836107b45c7a69bc565beca37a7e62b8adeb9e209e47960b5fbf757803f8e385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
