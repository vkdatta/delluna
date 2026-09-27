export const name="arrow-up";
export const id="dl_4149467a8fbf4e7c82c9";
export const url=new URL("../icons/arrow-up.svg?v=d6309c6975511d035121d5ead3bd353d83d46a896382e45cd696b149d07e5ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
