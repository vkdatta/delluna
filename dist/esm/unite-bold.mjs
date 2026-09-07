export const name="unite-bold";
export const id="dl_ce78788f7902478aa002";
export const url=new URL("../icons/U/unite-bold.svg?v=386288d3a0a3c5df66b5e3e84fdde4725056a9d0e575b12071d31941556d6b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
