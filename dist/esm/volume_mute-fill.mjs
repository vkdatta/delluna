export const name="volume_mute-fill";
export const id="dl_88f322db7daa488d961d";
export const url=new URL("../icons/volume_mute-fill.svg?v=c50751757d5d932bcab8bbf60c993891bc631d01486f0567579a7311a607e474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
