export const name="lockers-bold";
export const id="dl_95a6a3a0dc61471284c8";
export const url=new URL("../icons/lockers-bold.svg?v=82ab7512c4c875f477ec3964290af4d5f440da7cd8b37a6b57d2b75cecba0e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
