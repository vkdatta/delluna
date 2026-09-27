export const name="arrow-bend-right-down-thin";
export const id="dl_0c42e27aafdd45c296d3";
export const url=new URL("../icons/arrow-bend-right-down-thin.svg?v=92a9c22b842d8f206f5ea776ad019058b29db2e68e2a1cdd7ee7425d1251698c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
