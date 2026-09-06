export const name="oven";
export const id="dl_6ba215eef383411f8857";
export const url=new URL("../icons/oven.svg?v=1b09d431795dc75cbb0746be8e5aebc3987f3d03c15b9c533efdaef1909b8e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
