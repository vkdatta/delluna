export const name="lucid_2-file-chart-line";
export const id="dl_177f0ca7f7e94bce8278";
export const url=new URL("../icons/lucid_2-file-chart-line.svg?v=6f93d83fcaa326cd51c97f00b5de398d64967a662273ae3f2d79995a1622974c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
