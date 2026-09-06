export const name="lucid_3-radar";
export const id="dl_b6ffc16986ca4785b767";
export const url=new URL("../icons/lucid_3-radar.svg?v=de43589873779eb2277a720a55eb20f3632ef6e957c965c871bae550d1670250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
