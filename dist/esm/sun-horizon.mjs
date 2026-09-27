export const name="sun-horizon";
export const id="dl_075dd59d6ee50a7f3fbb";
export const url=new URL("../icons/sun-horizon.svg?v=2304d4e89d65207a6f70309974f56429e47a7e12669977aecb6408e9dd65fb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
