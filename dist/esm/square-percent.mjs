export const name="square-percent";
export const id="dl_cb070652859643c7b00b";
export const url=new URL("../icons/square-percent.svg?v=ed26db831026ed3b2c267b08c06a771e2c280985a74ff7cd8c254306c548de3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
