export const name="waveform-slash-thin";
export const id="dl_6f6d86a2c55c4def6824";
export const url=new URL("../icons/waveform-slash-thin.svg?v=efe7046dd8e51d9a7f4fa1ecce4f6dbda51fcf41c001bd28a99574f6bf2b5b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
