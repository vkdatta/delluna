export const name="battery-vertical-medium-bold";
export const id="dl_1b83890b7cd442508d38";
export const url=new URL("../icons/battery-vertical-medium-bold.svg?v=c50569ec034654cf51766db1a990d272957f908987bbac7a1f5341235df02028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
