export const name="ev_station";
export const id="dl_94e3e830a9d556f5ecff";
export const url=new URL("../icons/ev_station.svg?v=f6e254c38cc26c9093b92e27d5a4d021aa2b628937cbc21b5128485cb1f62780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
