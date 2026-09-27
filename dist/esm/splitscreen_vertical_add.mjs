export const name="splitscreen_vertical_add";
export const id="dl_690b7e582cc2ebba6ae0";
export const url=new URL("../icons/splitscreen_vertical_add.svg?v=cb0ea4f202e97cd02922c2cd96023534fe6767267efaa99a10823d3ef3761b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
