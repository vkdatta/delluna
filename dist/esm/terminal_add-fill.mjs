export const name="terminal_add-fill";
export const id="dl_afe09ed5ccc39d21766d";
export const url=new URL("../icons/terminal_add-fill.svg?v=b1f848262672c7201e33385adf541267b5a491d4e6b920cc4fd8d21fcf6a82f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
