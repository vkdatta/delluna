export const name="smart_toy-fill";
export const id="dl_5217a1b9dfd1dab8c054";
export const url=new URL("../icons/smart_toy-fill.svg?v=f1f72ee5c4d8a5972bbc8e468a5e76e95089c3bfbad67745597d86ba80544692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
