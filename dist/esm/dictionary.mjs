export const name="dictionary";
export const id="dl_b4a848922402378923b8";
export const url=new URL("../icons/dictionary.svg?v=41df4b853f52856dcbbb991128d060af33cbabbc0038b930e9cf148d5fdbb23a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
