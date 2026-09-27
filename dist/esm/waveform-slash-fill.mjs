export const name="waveform-slash-fill";
export const id="dl_93d670e5ed135452cdb2";
export const url=new URL("../icons/waveform-slash-fill.svg?v=8e1638a45ee9d00d59f59391c650930769eca757162cde3e45fb0e161072f9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
