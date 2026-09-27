export const name="heart-break-thin";
export const id="dl_607f14b6cc4a4e5ea339";
export const url=new URL("../icons/heart-break-thin.svg?v=f43a942bbfc7c69724e523949881c7aba42d3946fd9c4f80623a5206e08b3558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
