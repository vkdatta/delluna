export const name="lucid_3-send-to-back";
export const id="dl_aadaca469c3548adb967";
export const url=new URL("../icons/lucid_3-send-to-back.svg?v=e01b918f7de6d90df07ce276d14156f7c8c73e93387f5783daabf027f03b6c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
