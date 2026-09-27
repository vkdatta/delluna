export const name="crane-thin";
export const id="dl_7e8ef343ed5d4c139389";
export const url=new URL("../icons/crane-thin.svg?v=72a2b2dcfeb2c3a42c5b2822f61e248fbf4eec4a95e9dab77dc1f9e4ef4a312b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
