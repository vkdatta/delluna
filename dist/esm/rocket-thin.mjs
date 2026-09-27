export const name="rocket-thin";
export const id="dl_17154c1f6aae4af68b10";
export const url=new URL("../icons/rocket-thin.svg?v=614d551f61edddb76e966c0bb53cb0f25855cbce955f6bcc749dc246b4bc5969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
