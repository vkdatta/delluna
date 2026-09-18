export const name="published_with_changes";
export const id="dl_fd35df42f9b741bfbed4";
export const url=new URL("../icons/published_with_changes.svg?v=8f3d0ad43e9121c37b140149dfa8506dd282cca27d98e6300f717fc85ad3b877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
