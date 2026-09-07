export const name="speaker-simple-slash-thin";
export const id="dl_03e545eff2164a4998cf";
export const url=new URL("../icons/S/speaker-simple-slash-thin.svg?v=f7da5a894128da7987eb4cffee46d1ffa1a111964d56eed50fdb773f3e49f8eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
