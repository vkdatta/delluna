export const name="brackets-angle-light";
export const id="dl_78285ce668da4701896c";
export const url=new URL("../icons/brackets-angle-light.svg?v=65f0697777925fe174c7226dd66801dfe3ae475345b18d7b7ba88a380b81d236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
