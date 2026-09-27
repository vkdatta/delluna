export const name="gps-slash-bold";
export const id="dl_92a20f66b71d4f6eb105";
export const url=new URL("../icons/gps-slash-bold.svg?v=e6761fc1ec7939e0655d5a63ac917c7aee6c6ac1c2b1ab517d3483644dddc7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
