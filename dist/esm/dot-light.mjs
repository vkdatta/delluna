export const name="dot-light";
export const id="dl_f7fd87d9ec4244a085ac";
export const url=new URL("../icons/dot-light.svg?v=cf8f38980f30db35e2a60550a93464e10c2954b50ce6c7191068eb5e33ef4164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
