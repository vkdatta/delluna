export const name="shift";
export const id="dl_bff9b21af1c44e35acc8";
export const url=new URL("../icons/shift.svg?v=862620ccdbea973aff807d9ce719ea8e310cbfc6baf0af8a59de043b84168fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
