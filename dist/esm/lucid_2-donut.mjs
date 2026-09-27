export const name="lucid_2-donut";
export const id="dl_74d684cfd1f042508cfb";
export const url=new URL("../icons/lucid_2-donut.svg?v=d6dc3c66d7eb26e6fe1056c7f7902ba1b9c9f0f0b6d3872ee37b45437b6e86d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
