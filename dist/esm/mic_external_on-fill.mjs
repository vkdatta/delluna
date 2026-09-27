export const name="mic_external_on-fill";
export const id="dl_dcce56e6715803461c8d";
export const url=new URL("../icons/mic_external_on-fill.svg?v=ae2f96e615d9ce9033a5812c3463853f88c7a6562b526d87e7f34bdbed630cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
