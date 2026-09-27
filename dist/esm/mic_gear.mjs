export const name="mic_gear";
export const id="dl_80163b16d6aeff13bf17";
export const url=new URL("../icons/mic_gear.svg?v=0d4c648dbc9d07c35027a2d01bd7bb190975eaf87661ae1372290dda10074af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
