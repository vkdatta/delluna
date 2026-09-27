export const name="transition_push";
export const id="dl_f55a8787937ce7f9fff7";
export const url=new URL("../icons/transition_push.svg?v=2996b93dd4743b32a029b1d02a489de3f59685ac8fa0388de8357d18dacf9fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
