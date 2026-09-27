export const name="video-conference";
export const id="dl_97becb8d93390927b8f0";
export const url=new URL("../icons/video-conference.svg?v=0052dd9dcbf5f971a6d637dfa70f605bbd730eca9ae7a182641d3818a5210dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
