export const name="seat-thin";
export const id="dl_9976c1d3e1f09decc9d6";
export const url=new URL("../icons/seat-thin.svg?v=0b857304301c07dce218255b56acb2f3fb0ddb99a1de38325d4caffc3cf5dd14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
