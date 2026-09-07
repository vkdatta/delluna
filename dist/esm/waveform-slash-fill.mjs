export const name="waveform-slash-fill";
export const id="dl_4c52a969fd0848e7aff8";
export const url=new URL("../icons/W/waveform-slash-fill.svg?v=0d30238ac2490c170498d813302f62bbbd9777676de4c76cfb4cd534bb2a125e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
