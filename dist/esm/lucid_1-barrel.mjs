export const name="lucid_1-barrel";
export const id="dl_d795478f848b4242bef5";
export const url=new URL("../icons/lucid_1-barrel.svg?v=a5581b3f0b4d2ac21764ff7b5dd51b49a19c5c3ce60461628c4dfa5cce4954eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
