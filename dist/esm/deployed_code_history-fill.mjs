export const name="deployed_code_history-fill";
export const id="dl_e2560e37aca9bed5647a";
export const url=new URL("../icons/deployed_code_history-fill.svg?v=9bb17deb4b3463fe01e36a51c35d3865c15b74ea6932feda89ddce12d0c71eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
