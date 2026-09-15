export const name="format_quote_off";
export const id="dl_0702fe8469864cbfaa05";
export const url=new URL("../icons/F/format_quote_off.svg?v=29eb6ff7490735f1f55323afaac7f0c9c6e24ec8e5c5cab8a5c770f3289c0092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
