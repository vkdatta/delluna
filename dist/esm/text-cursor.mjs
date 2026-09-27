export const name="text-cursor";
export const id="dl_4228c34cc73549398999";
export const url=new URL("../icons/text-cursor.svg?v=95d2e06fbdc36ca44af38d4851f0d2fb271acd4b4d4dab6d87f30ee870475e26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
