export const name="needle-light";
export const id="dl_b3f980bc8dd44790a9ca";
export const url=new URL("../icons/needle-light.svg?v=c1bc0c094ed1f58c1285a6bbda37f4df742bc3184205573b1b54178d7bbd5d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
