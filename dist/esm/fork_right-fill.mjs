export const name="fork_right-fill";
export const id="dl_b01edb3efed87ad8e33a";
export const url=new URL("../icons/fork_right-fill.svg?v=204751c305d3954b0de9b41c6aa9053cf8ee289d26b007333c0fed9371a891ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
