export const name="browsers";
export const id="dl_8aa9ae5dd68e45acb1a4";
export const url=new URL("../icons/browsers.svg?v=2f3a74ae8f0828964019b6cf9a5afe07a1f4adf188de4b2072440f205d6e3ad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
