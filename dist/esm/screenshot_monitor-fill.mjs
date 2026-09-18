export const name="screenshot_monitor-fill";
export const id="dl_045f459504194345bf77";
export const url=new URL("../icons/screenshot_monitor-fill.svg?v=40203e40809a799a6aa641981cd993600a8f43ff6680a516d167bbee2db6fdef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
