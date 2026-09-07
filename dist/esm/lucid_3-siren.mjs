export const name="lucid_3-siren";
export const id="dl_995af2b50f3b42caad31";
export const url=new URL("../icons/lucid_3-siren.svg?v=9098dd0a642fc3ebd8a5d4d18e78bfef8d2faddb277014c6ec7022ba919fd73d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
