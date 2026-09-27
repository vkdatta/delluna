export const name="edit_audio-fill";
export const id="dl_5d3a6cfc5a1922c3b0c3";
export const url=new URL("../icons/edit_audio-fill.svg?v=065c1cf4063a7984ff82dfd0a8e05c9de94d1d56eeb4bb2a97f67a99c67e2f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
