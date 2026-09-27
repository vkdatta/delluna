export const name="arrow-square-down-right-thin";
export const id="dl_5882f75b873e43faa8dd";
export const url=new URL("../icons/arrow-square-down-right-thin.svg?v=1c9e98840c811187a06135abb39016943005f04b294e693995c51dfcd9789b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
