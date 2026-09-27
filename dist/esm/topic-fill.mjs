export const name="topic-fill";
export const id="dl_30c92ed3ea7f71a65cae";
export const url=new URL("../icons/topic-fill.svg?v=3275d615c72ad9a77d5867888796fc44464026692da5d2e0d13432f98dcb459d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
