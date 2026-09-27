export const name="code_off-fill";
export const id="dl_258218b605df015fd0a9";
export const url=new URL("../icons/code_off-fill.svg?v=3c2b4426ad1c348c750a5954de5cb9cebd27292cc195930fd114e61d79528165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
