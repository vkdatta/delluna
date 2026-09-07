export const name="lucid_3-solar-panel";
export const id="dl_1b6242b3fb49404cb7f9";
export const url=new URL("../icons/lucid_3-solar-panel.svg?v=d7ce03eb214a9caf601388d5e632733201588539dfa951459797cd789f0465ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
