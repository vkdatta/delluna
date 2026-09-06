export const name="baseball-cap-light";
export const id="dl_5776efb08fa74badaa24";
export const url=new URL("../icons/baseball-cap-light.svg?v=c101ece2521f583bd03f8331e38dbea972d681adbd2519f907cfcf7e147a5ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
