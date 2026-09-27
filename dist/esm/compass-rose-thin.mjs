export const name="compass-rose-thin";
export const id="dl_b25d727c7b5b4011bd91";
export const url=new URL("../icons/compass-rose-thin.svg?v=f71363098a94ba4c55102bb5d9bbad5c2553caa416008bf5e8c8f1eaf8070331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
