export const name="lucid_1-candy-off";
export const id="dl_fddcab5393b5434598c0";
export const url=new URL("../icons/lucid_1-candy-off.svg?v=9852857f03688c415249287f53c2bc111ee56294b9ed49f3cb4d739de00dc506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
