export const name="lucid_3-shrink";
export const id="dl_1547d5f02fdf4c438c5b";
export const url=new URL("../icons/lucid_3-shrink.svg?v=3f2a819d94efcadd80ffeac2adf91df4075bbca8e3e1b68204a316a8960bac74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
