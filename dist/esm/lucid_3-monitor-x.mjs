export const name="lucid_3-monitor-x";
export const id="dl_2910c8c94707479d9512";
export const url=new URL("../icons/lucid_3-monitor-x.svg?v=e0bb1aa4965090e1681e2a2eb7dac9212b49863db43e447693c302ef3b2e1051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
