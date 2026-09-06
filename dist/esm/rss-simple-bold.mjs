export const name="rss-simple-bold";
export const id="dl_2c271069d6154853a0ad";
export const url=new URL("../icons/rss-simple-bold.svg?v=fb0f10cc46a47cab047c50eba516caa9d75939d9eafc9427a0e3338f7184ef24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
