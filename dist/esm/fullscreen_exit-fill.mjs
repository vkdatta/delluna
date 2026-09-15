export const name="fullscreen_exit-fill";
export const id="dl_26ee8782bfc342d4be10";
export const url=new URL("../icons/F/fullscreen_exit-fill.svg?v=a8f3afe09957f7de3c08fb0fe604fdef136a5c07ff5afcb327738be35bfc13bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
