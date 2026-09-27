export const name="hand-arrow-down-thin";
export const id="dl_21d24ac5777343469c1d";
export const url=new URL("../icons/hand-arrow-down-thin.svg?v=45ca4070c7f1cd523c3ff22069cbb522c7f5c4952a42accce44003d7918c9b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
