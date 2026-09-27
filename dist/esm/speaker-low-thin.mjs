export const name="speaker-low-thin";
export const id="dl_5cffebd2b0fad6924244";
export const url=new URL("../icons/speaker-low-thin.svg?v=0fd43c182077a6f11623dd9c45441bd0e6fc21c1f3f86e316798aab47c101e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
