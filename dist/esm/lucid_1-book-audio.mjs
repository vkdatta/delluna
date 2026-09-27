export const name="lucid_1-book-audio";
export const id="dl_065389fca36a47e98b05";
export const url=new URL("../icons/lucid_1-book-audio.svg?v=3fc3fb54ee387c66aec58d843a2e15190f2a428701a6d3fb1271bc2b18ff2ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
