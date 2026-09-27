export const name="chart-scatter-thin";
export const id="dl_68583a9b125640a48910";
export const url=new URL("../icons/chart-scatter-thin.svg?v=68f637da083eb651af7d453b97f986b63ff0b946f4b868b1997ed67125b90627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
