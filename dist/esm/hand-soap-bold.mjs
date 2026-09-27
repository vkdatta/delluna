export const name="hand-soap-bold";
export const id="dl_9441e6330fda4a7c875b";
export const url=new URL("../icons/hand-soap-bold.svg?v=b8f807f0b348f4b22bf1266ef8afa9f9a64eb2985788e42b5caaa09bef5e4291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
