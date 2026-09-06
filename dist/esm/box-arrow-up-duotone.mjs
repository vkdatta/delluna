export const name="box-arrow-up-duotone";
export const id="dl_b04d2cf7153f45dab04d";
export const url=new URL("../icons/box-arrow-up-duotone.svg?v=3ccf738bc97ee7c55d1da94a1d386f1a89dd0896dc150a494fb54a5b9438fee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
