export const name="caret-up";
export const id="dl_19d84e9ae342473d9b1c";
export const url=new URL("../icons/caret-up.svg?v=a2c980647d4ed626d6e52a60e7a7bb318c70e0d7b1186ae6e3db8502cd8f34e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
