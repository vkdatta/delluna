export const name="test-tube-diagonal";
export const id="dl_8321ee3045764f8096f8";
export const url=new URL("../icons/test-tube-diagonal.svg?v=68462407634120ae510ec95d22b908268b27cac3ff47b1b497a1ad675aa6b7a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
