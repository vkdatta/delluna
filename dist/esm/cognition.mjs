export const name="cognition";
export const id="dl_1fe383a12456875001d8";
export const url=new URL("../icons/cognition.svg?v=02f10479f864807d16237e299a7f1427af2968b1ea13541f3acac4da65052815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
