export const name="mood";
export const id="dl_6c39c151e015af7ef6a2";
export const url=new URL("../icons/mood.svg?v=538ffdad2b9421220dab3251204cc45d8f31178b6b983ec5dae9bb9ee8df3fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
