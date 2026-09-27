export const name="caret-line-up-thin";
export const id="dl_847a4a56b09f4552a6d9";
export const url=new URL("../icons/caret-line-up-thin.svg?v=f3e092945a886d8fc4f44c35fec78132fee91b9de6ffc650195e14e09318edf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
