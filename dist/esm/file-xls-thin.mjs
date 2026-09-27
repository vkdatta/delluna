export const name="file-xls-thin";
export const id="dl_3795bf58f72e4c558384";
export const url=new URL("../icons/file-xls-thin.svg?v=61fec2cdd990c3eab4e0f915ad7c923db36a469c65a8fc9cc1690271d15fedfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
