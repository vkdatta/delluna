export const name="view_timeline";
export const id="dl_8b8de99e92944d9ab399";
export const url=new URL("../icons/view_timeline.svg?v=867b86ccf94d2c81fdf0ee1c60325e05780e216d7aadc7ad8997d939e6f1a895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
