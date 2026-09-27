export const name="lucid_1-brush";
export const id="dl_b9f79d7064d3489ba9a4";
export const url=new URL("../icons/lucid_1-brush.svg?v=cd98fb4f40ed1eab3c0333efed388f057e0f7633c6210d843aaf8d8dd4b0a730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
