export const name="clock";
export const id="dl_c83561e145c7484291fc";
export const url=new URL("../icons/clock.svg?v=7b3180128b17f110e74daba4edbd8cf90a83dc52f2462c2467e11b1e32dd9c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
