export const name="share_eta-fill";
export const id="dl_451eaeb429ac9ab8556e";
export const url=new URL("../icons/share_eta-fill.svg?v=f57fe39ae4d1e53137d742fb993bb78b06c56d271272ec0f8ac2ae9ebc1ac3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
