export const name="globe_clock-fill";
export const id="dl_c272db7f918885f10ed9";
export const url=new URL("../icons/globe_clock-fill.svg?v=e80a097c5ec76e475b9aebd57f82d895576c71d63fcbd45ee8064b64389a32b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
