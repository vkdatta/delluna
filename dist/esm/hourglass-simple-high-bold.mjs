export const name="hourglass-simple-high-bold";
export const id="dl_8733203c18df4397baf7";
export const url=new URL("../icons/hourglass-simple-high-bold.svg?v=b30e0340f2a84f42543999a82ed04e8daeabab8ea1d7bc946cf791189a6ff51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
