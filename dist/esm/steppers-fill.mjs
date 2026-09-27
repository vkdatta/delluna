export const name="steppers-fill";
export const id="dl_1d70612ebd55dbc204a0";
export const url=new URL("../icons/steppers-fill.svg?v=b4ce22795f1c215f39481d63fde19e6736ede56ba3ac8ec87ed771382a40354c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
