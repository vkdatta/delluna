export const name="aod_tablet";
export const id="dl_9961adddd38197a0c8f8";
export const url=new URL("../icons/aod_tablet.svg?v=54fafae97db84bca7985ee2bba03a471274bf9ab84495a51ac2cd5fd3a38821b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
