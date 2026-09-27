export const name="local_car_wash";
export const id="dl_5308aa0dd0f33289841d";
export const url=new URL("../icons/local_car_wash.svg?v=2fff95e3cdafbd3aecab4ac143da3b2b5a21be60c385f0704e93f2efa3813837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
