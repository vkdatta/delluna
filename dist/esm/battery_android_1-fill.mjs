export const name="battery_android_1-fill";
export const id="dl_be9fbd286afc4c05803c";
export const url=new URL("../icons/B/battery_android_1-fill.svg?v=a1c092d05aa48562239a0a3b45f6540b6c4be4cd92257f65930d2c66973561cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
