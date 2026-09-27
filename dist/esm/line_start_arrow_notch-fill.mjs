export const name="line_start_arrow_notch-fill";
export const id="dl_bda6a51b9b8663918ea9";
export const url=new URL("../icons/line_start_arrow_notch-fill.svg?v=ded0210112ce1bc01f8c5e44cdec9a5875c70ac5f4449553c1a3e886508ea32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
