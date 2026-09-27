export const name="arrows-out-line-vertical-fill";
export const id="dl_a70542fabd694d8cbac8";
export const url=new URL("../icons/arrows-out-line-vertical-fill.svg?v=9b49e4d3ee27bdb0a4862d031a2104d6b62ef3cfbf0ba2522c1d439ad0a3c4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
