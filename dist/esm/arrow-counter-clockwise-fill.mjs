export const name="arrow-counter-clockwise-fill";
export const id="dl_81fc4856073e4feb89b0";
export const url=new URL("../icons/arrow-counter-clockwise-fill.svg?v=e3d0f0459b6cbb52c485987d8612d77095202cf96c0b5e39b203686b004d864f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
