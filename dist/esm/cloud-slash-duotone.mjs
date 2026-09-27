export const name="cloud-slash-duotone";
export const id="dl_c04fe20964b74418b163";
export const url=new URL("../icons/cloud-slash-duotone.svg?v=c8751e692e40292445bb04597195b5057f35b07aacd5d4d7da52b94918f05b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
