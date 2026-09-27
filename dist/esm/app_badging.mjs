export const name="app_badging";
export const id="dl_2828f998d7b4e5a9b8d2";
export const url=new URL("../icons/app_badging.svg?v=ccd4cc173ba0f6c4139eb2ee12b857a09c5e46d1b84893411329b5793bd27e8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
