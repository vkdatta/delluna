export const name="audio_description-fill";
export const id="dl_b97bc2806b6dab708afa";
export const url=new URL("../icons/audio_description-fill.svg?v=17e4a3acedf1c0b1a1d04e7a58ba0a861958e5b09e50da35959acb1491ff0769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
