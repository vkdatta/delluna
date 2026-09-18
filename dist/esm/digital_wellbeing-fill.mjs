export const name="digital_wellbeing-fill";
export const id="dl_2faac03bb6774028853d";
export const url=new URL("../icons/digital_wellbeing-fill.svg?v=b69dfa405c5fc7f3d981892685bd360a0a9cb1de85ec17558cf53ea800860711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
