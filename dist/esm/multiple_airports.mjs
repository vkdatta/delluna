export const name="multiple_airports";
export const id="dl_bc41444a31e1dbd2ccac";
export const url=new URL("../icons/multiple_airports.svg?v=72bac7c901c34cf921192f9dc48404c7afe481247d4a6a4ef472e3934f59c5cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
