export const name="windmill";
export const id="dl_9a93ada378ccd7a90214";
export const url=new URL("../icons/windmill.svg?v=f1d1a2cbcf5e2515066b8253acf6ff8b16a20c42f3928d889dc0d43c4cbdbeff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
