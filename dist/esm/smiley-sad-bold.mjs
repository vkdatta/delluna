export const name="smiley-sad-bold";
export const id="dl_c22435a36f0e4c3184dc";
export const url=new URL("../icons/S/smiley-sad-bold.svg?v=86ca156bef5f21574c1de0ed2339354b719568a24567c019fddfe8d60c1cbff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
