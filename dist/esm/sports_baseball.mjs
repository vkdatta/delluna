export const name="sports_baseball";
export const id="dl_13ba3ab78de6448bb5ca";
export const url=new URL("../icons/sports_baseball.svg?v=eb796e1f00a0c780e3d6579d7df1b18be1895813aeabf47942b2cd287a615264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
