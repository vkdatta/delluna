export const name="basketball-thin";
export const id="dl_215e1ce797844c519700";
export const url=new URL("../icons/basketball-thin.svg?v=a4b4fbd1cbef6081008ee1cb2d6d835b1a43ec121e7e49677d4d2a713941106f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
