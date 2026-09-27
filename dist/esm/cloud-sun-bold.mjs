export const name="cloud-sun-bold";
export const id="dl_dce926d2138a49489550";
export const url=new URL("../icons/cloud-sun-bold.svg?v=ab9b2087a795c80a350ff1fc7ec3dda91a3d1a9b1482b474afee2961270fda41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
