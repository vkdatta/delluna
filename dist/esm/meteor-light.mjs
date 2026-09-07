export const name="meteor-light";
export const id="dl_89da0554414c4fa1834c";
export const url=new URL("../icons/meteor-light.svg?v=6ea77123e47f0ede34624e05abd62871e816c22270c1c1c4feeb57ed638ccfd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
