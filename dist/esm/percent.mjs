export const name="percent";
export const id="dl_5ac274e5d4b742818724";
export const url=new URL("../icons/percent.svg?v=8f0b031e468915657870ccb72958141704469d81f5944a1ad5777d819d654ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
