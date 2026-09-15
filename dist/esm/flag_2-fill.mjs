export const name="flag_2-fill";
export const id="dl_7a6a40ce2a0a48038727";
export const url=new URL("../icons/F/flag_2-fill.svg?v=3731a064e44e72d962720ff4e42a10c1ea6eb852deeade846e6cc6c4d5110a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
