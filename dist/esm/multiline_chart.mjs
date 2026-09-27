export const name="multiline_chart";
export const id="dl_82637fc5fb7068162d43";
export const url=new URL("../icons/multiline_chart.svg?v=02ea0ac228a5fabd35d95085172d46ad93e631cbefe31cc37245dba9e2b1b620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
