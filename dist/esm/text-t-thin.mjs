export const name="text-t-thin";
export const id="dl_0a8edf4252be47de9b1b";
export const url=new URL("../icons/T/text-t-thin.svg?v=b4a8e4e77e189e4dfb15cc67b801540a4af32007b6611ed8c907fb51d81a6d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
