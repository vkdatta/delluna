export const name="steering_wheel_heat-fill";
export const id="dl_ae66e880e8de440caa1f";
export const url=new URL("../icons/steering_wheel_heat-fill.svg?v=46e8e0c98c94ed703227e7904afd08e5a6cf0d7e8031a37b421de5ddba260b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
