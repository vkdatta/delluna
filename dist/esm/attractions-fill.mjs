export const name="attractions-fill";
export const id="dl_fd375c4d8e9e4bf8b1e1";
export const url=new URL("../icons/attractions-fill.svg?v=7c430c5bc42fa0ff074bb079f074d65a4ecf1b8f8ee4669d2ebbc9b037167c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
