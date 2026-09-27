export const name="square-bold";
export const id="dl_2b8cfcadfdd8dff6bf0c";
export const url=new URL("../icons/square-bold.svg?v=b438cfa150665814eac484dc0803648bae50d2a0babf73ab5a2a2b553142d925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
