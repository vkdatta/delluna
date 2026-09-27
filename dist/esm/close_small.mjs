export const name="close_small";
export const id="dl_d304ad2733a1c4d03699";
export const url=new URL("../icons/close_small.svg?v=7be1a0a007d5bde350f1a718778dcf7fd3bb4ff806c44dfa615a5e4fc22839d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
