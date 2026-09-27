export const name="triangle-light";
export const id="dl_2ecd4250712a1dd9797d";
export const url=new URL("../icons/triangle-light.svg?v=dedaecf735dff380a24507a1edf6ce4ff3697fcb28288078e77f66ac7f61a50d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
