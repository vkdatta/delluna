export const name="fork_chart-fill";
export const id="dl_c858aa0546c10576b339";
export const url=new URL("../icons/fork_chart-fill.svg?v=549e834984f74daaba6fff00924b8ed79d04e81f9bb5a2fc2d3e607d684cb414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
