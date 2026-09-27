export const name="publish-fill";
export const id="dl_0478f89108fce7825f7e";
export const url=new URL("../icons/publish-fill.svg?v=e8f70e78df39b927ad1ae9fe0c5ddceedd6094881f00dcb9effd3c47e1d050ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
