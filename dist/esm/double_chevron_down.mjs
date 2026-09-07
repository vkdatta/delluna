export const name="double_chevron_down";
export const id="dl_7617bda645ab4011b601";
export const url=new URL("../icons/all_60_named_svgs/double_chevron_down.svg?v=59cce75bb4ce8b838ffd09007331f69330a31786aadc12eefb4ab637fa52b476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
