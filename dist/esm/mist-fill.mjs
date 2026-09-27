export const name="mist-fill";
export const id="dl_ccb281c81a0a5519b2b4";
export const url=new URL("../icons/mist-fill.svg?v=8e842af4024476c5d5d23ba04eb539fd2f0d3475d563cec017109eff56a960a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
