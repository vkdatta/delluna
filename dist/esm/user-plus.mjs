export const name="user-plus";
export const id="dl_69e4b6c4b4656a89802b";
export const url=new URL("../icons/user-plus.svg?v=e1b4e409133b4771c830c79bee1b42d63eb21e7a6b847d471b6e26e1c8da072c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
