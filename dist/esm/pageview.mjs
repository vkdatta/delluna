export const name="pageview";
export const id="dl_c7493ddadfac6e1ca660";
export const url=new URL("../icons/pageview.svg?v=a564133ebb45ea150e780b4d3db1ce33be3f49763bb3a92aab28a62d3cc1b607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
