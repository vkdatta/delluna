export const name="thermometer-bold";
export const id="dl_392c0f1848ee3588abff";
export const url=new URL("../icons/thermometer-bold.svg?v=0e5b2528ceca1df26fb5d807994e3edf706935950a20d242f6adc52a8a216322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
