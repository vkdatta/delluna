export const name="wrap_text";
export const id="dl_5e4fabe2d3dafd4beb8b";
export const url=new URL("../icons/wrap_text.svg?v=f805092fd6b594aa9736ed730424ef4731cbd1877e4a65adf92875f75f47d051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
