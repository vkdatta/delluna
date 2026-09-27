export const name="tv_options_edit_channels";
export const id="dl_88d73ff8fda6d948cfcd";
export const url=new URL("../icons/tv_options_edit_channels.svg?v=8e02805b252096c553fce4d0f404432550a8533b69f2c63a857dcdf4648a2978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
