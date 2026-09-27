export const name="lucid_3-radio-receiver";
export const id="dl_0575924a600f4799ad1d";
export const url=new URL("../icons/lucid_3-radio-receiver.svg?v=f3dae2b8836061fef53316430549b83b48262f6b412bc9379ea30c7a95f151d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
