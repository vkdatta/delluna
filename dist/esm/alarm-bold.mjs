export const name="alarm-bold";
export const id="dl_a6f4be65b4744914b6bf";
export const url=new URL("../icons/alarm-bold.svg?v=712b8e34cb184e831e52f295d184dc1539820c54866f8bdd37714ad843d10ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
