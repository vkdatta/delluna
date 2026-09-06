export const name="corners-in-fill";
export const id="dl_1ada138629b74f76ae1d";
export const url=new URL("../icons/corners-in-fill.svg?v=ade092d133654ec69ee3484ed10b79523ffe23eb9b8f9c96e5e1fe72b7af31be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
