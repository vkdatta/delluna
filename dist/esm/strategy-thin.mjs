export const name="strategy-thin";
export const id="dl_fa7bc6a7904a4219980d";
export const url=new URL("../icons/S/strategy-thin.svg?v=0e0069aae8abfb7216c228ef10eaffe10b5038434167e82b2dbd37e7b40486fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
