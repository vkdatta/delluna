export const name="cheers-light";
export const id="dl_7dc4e18d90a0496b8389";
export const url=new URL("../icons/cheers-light.svg?v=4a13d517dfe4063fb93f668d543af4d933ebd9194929ead4262863e0c13bd688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
