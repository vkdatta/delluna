export const name="settings_input_svideo";
export const id="dl_808fa4118712f8e65027";
export const url=new URL("../icons/settings_input_svideo.svg?v=6333830e5b5cd99978d7f12fccb7c3176ce8ec7e234887f9373aeb1245bb77c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
