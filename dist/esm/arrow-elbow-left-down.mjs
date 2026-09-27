export const name="arrow-elbow-left-down";
export const id="dl_9875aaee11bb4f918f47";
export const url=new URL("../icons/arrow-elbow-left-down.svg?v=e170b06cbf7e2f4f4a8a509b92563a0c0c2935cbad9454b4a0fbe6792052c9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
