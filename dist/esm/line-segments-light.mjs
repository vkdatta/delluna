export const name="line-segments-light";
export const id="dl_ce1463e7f5a748b985f0";
export const url=new URL("../icons/line-segments-light.svg?v=df90b64adcbce59def9ec2871cb62cacdd966e4ff1506cbe172b3bdd458d17d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
