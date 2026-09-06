export const name="file-xls-thin";
export const id="dl_3795bf58f72e4c558384";
export const url=new URL("../icons/file-xls-thin.svg?v=034a55b3b4afac53e436b3e097554269278e828fac09f36fd722eae250886916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
