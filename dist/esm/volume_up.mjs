export const name="volume_up";
export const id="dl_4e84bed167f84ac1b1ea";
export const url=new URL("../icons/V/volume_up.svg?v=193b656e5dd31293574ad92d32dfc005d171568b38b7903c409d53d66686d023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
