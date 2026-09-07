export const name="paint-bucket-thin";
export const id="dl_c638fa05d037437e9422";
export const url=new URL("../icons/paint-bucket-thin.svg?v=5798a6c83e4bb13e2fd1b6c3e2f61a50a336a4006e82ea971792fef4505f2768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
