export const name="x-square-thin";
export const id="dl_5591d2ac25bee8093aa7";
export const url=new URL("../icons/x-square-thin.svg?v=973e87afa06e238699b96daaa1b7e40656ed4edaf188821c2df1ba9e8d088033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
