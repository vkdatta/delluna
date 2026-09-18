export const name="chrome_reader_mode-fill";
export const id="dl_ea59e44a2460496588fe";
export const url=new URL("../icons/chrome_reader_mode-fill.svg?v=bb81f84f41a61fc98712b12f8eed8062812857f5b90f51ec739160dcc203e503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
