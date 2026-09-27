export const name="square-slash";
export const id="dl_fee9b8386172472092e7";
export const url=new URL("../icons/square-slash.svg?v=1431e59138c98b6d8edc1c301fd903b7fda764a1192cd665dc6a70b80acadf8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
