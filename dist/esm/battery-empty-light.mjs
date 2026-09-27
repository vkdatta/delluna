export const name="battery-empty-light";
export const id="dl_b90a0baf1de04ddb81cf";
export const url=new URL("../icons/battery-empty-light.svg?v=370b20bbbd2be1e69755122f9c2e6591c0fd1f0c08184106d520a36618d4dae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
