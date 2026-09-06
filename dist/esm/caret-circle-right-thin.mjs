export const name="caret-circle-right-thin";
export const id="dl_69ca9d7207354c288298";
export const url=new URL("../icons/caret-circle-right-thin.svg?v=b97f66e97acd2cc7162c42051deb612dd0306f1e387dd65306c71e2e898ae3c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
