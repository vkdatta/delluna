export const name="video_stable";
export const id="dl_223b5a7f8e054bebabf7";
export const url=new URL("../icons/V/video_stable.svg?v=560ec8bf59830741f3801a93f0672cf4f51169e67d1ed629ff8618a3e887004e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
