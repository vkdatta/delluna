export const name="cell-signal-slash-thin";
export const id="dl_4b6b878938b442d0b257";
export const url=new URL("../icons/cell-signal-slash-thin.svg?v=8c924706ffd7d1cdc19873d1b50a94c0c3d210017a8e2fb77ec880ee71308dfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
