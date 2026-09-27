export const name="unfold_down";
export const id="dl_89aac7c58a3ca462e262";
export const url=new URL("../icons/unfold_down.svg?v=2f5d5f41c6b7868ef27aee4144a227fa455af7aa7c5b3b41852a1a1eafea9c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
