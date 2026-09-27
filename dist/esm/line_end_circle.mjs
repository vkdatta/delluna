export const name="line_end_circle";
export const id="dl_79e460af4d4fa0f83454";
export const url=new URL("../icons/line_end_circle.svg?v=18f693162270a44dda7cf8839bad003bb702ce3ff1d6281b3bd6ebe3e842a1c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
