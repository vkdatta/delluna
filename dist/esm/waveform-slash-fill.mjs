export const name="waveform-slash-fill";
export const id="dl_dea5051ee7f741f7978e";
export const url=new URL("../icons/waveform-slash-fill.svg?v=0d30238ac2490c170498d813302f62bbbd9777676de4c76cfb4cd534bb2a125e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
