export const name="bus-duotone";
export const id="dl_7325b5fd37c54bd7ac89";
export const url=new URL("../icons/bus-duotone.svg?v=598c8488795b31e544b6e76c2be2678e86ae389a8c55e833c08aef0832dcc9b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
