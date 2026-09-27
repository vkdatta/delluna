export const name="swipe_left_alt-fill";
export const id="dl_0a465e8dfc1eef7b279d";
export const url=new URL("../icons/swipe_left_alt-fill.svg?v=c053def0b2ae79f7434ab4f4c5a4054c23069858b903e890919cb9c6a667f354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
