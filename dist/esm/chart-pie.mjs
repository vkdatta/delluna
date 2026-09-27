export const name="chart-pie";
export const id="dl_83b75e2187244f20a5c2";
export const url=new URL("../icons/chart-pie.svg?v=2dbe438524d70bd3598d090223a298d96549cd72258179a69097515460636bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
