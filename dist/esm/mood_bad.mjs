export const name="mood_bad";
export const id="dl_22ac8f42601680dd8949";
export const url=new URL("../icons/mood_bad.svg?v=e5a957f9dc579b76358d55ebf83d150dc44b343e468d003ab6b4f834302d812d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
