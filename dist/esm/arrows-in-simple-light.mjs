export const name="arrows-in-simple-light";
export const id="dl_72af05eb6aac4e25ab69";
export const url=new URL("../icons/arrows-in-simple-light.svg?v=eaef81782dbd20c7a6eeb3cce610e89cc4470b0580cab1817ef0bdc597d777f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
