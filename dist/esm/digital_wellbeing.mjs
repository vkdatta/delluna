export const name="digital_wellbeing";
export const id="dl_b9ca1662cc26f6e19483";
export const url=new URL("../icons/digital_wellbeing.svg?v=3d625403a54ff6e64fa6269cd693b85a4d850a6fa8c7aca905742ce2f4b9f06a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
