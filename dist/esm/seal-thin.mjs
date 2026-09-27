export const name="seal-thin";
export const id="dl_418ced9199267e418167";
export const url=new URL("../icons/seal-thin.svg?v=3b42038ec99af06bedb481a312a4a41f958eb28abc42320a0c339a77e17a57f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
