export const name="plugs-bold";
export const id="dl_0481c12390e744e693a0";
export const url=new URL("../icons/plugs-bold.svg?v=7e6874d76fa88e1370a5352a605b0d6b1894407e16ba8f21f7168c340fc80381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
