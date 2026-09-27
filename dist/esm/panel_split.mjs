export const name="panel_split";
export const id="dl_2ed1a18863ddf9044f24";
export const url=new URL("../icons/panel_split.svg?v=b5c531ea948460184df3646e568c0a7f777bfd50d6904bfd60c1c637d8cfa174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
