export const name="voice_over_off";
export const id="dl_d6cf74c37126ed50f4a3";
export const url=new URL("../icons/voice_over_off.svg?v=ec9aa04b08cb7e4b7e8b42b26af779b1d0b85a8e7dc803bd0d159d8534a4b624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
