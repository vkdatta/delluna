export const name="hard-hat-thin";
export const id="dl_e213fccc568a416c829f";
export const url=new URL("../icons/hard-hat-thin.svg?v=94017c5fe17d9d0cc29fa64df38a05446bd91d37175681a01883030a9854ac84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
