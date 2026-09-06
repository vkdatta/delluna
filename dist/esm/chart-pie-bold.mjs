export const name="chart-pie-bold";
export const id="dl_035e6d6f544e47bfad81";
export const url=new URL("../icons/chart-pie-bold.svg?v=330c636d9c6101d3f7540d861f9d1bffdd647446c0419b3db1cac7259e5ce4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
