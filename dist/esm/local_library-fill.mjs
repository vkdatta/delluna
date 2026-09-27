export const name="local_library-fill";
export const id="dl_b12e0b035f8c0d17e364";
export const url=new URL("../icons/local_library-fill.svg?v=cb4b5b23ccf09aa012ba9a50bf33e0b42c12cb4603995edf662abcff80cd3242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
