export const name="lifebuoy-duotone";
export const id="dl_5d77ea680d2e45f99038";
export const url=new URL("../icons/lifebuoy-duotone.svg?v=3905bd22a5b81bfdfc696b8593112c3186d03502bd4b03b36b5ea73319766264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
