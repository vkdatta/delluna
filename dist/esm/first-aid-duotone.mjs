export const name="first-aid-duotone";
export const id="dl_0b85f340eb0846929cb9";
export const url=new URL("../icons/first-aid-duotone.svg?v=e62bed9f875aeedbafb320be9c4e31bed92648c4751a066a3425678ec9e382fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
