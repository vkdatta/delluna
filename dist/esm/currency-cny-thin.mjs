export const name="currency-cny-thin";
export const id="dl_675d35cb694740789516";
export const url=new URL("../icons/currency-cny-thin.svg?v=b8382a43c6c453fd6fdfed04903b2740e12a7117ccf856b365654113efe1fcb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
