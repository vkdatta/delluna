export const name="arrow-fat-left-thin";
export const id="dl_96de9cb464b04cf7832a";
export const url=new URL("../icons/arrow-fat-left-thin.svg?v=d2cbd073242ffd91adf99993ec14adbee0f0888d7fcc42b8d647bce660b9b835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
