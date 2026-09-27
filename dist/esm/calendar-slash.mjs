export const name="calendar-slash";
export const id="dl_e3df4fc24bfc4d7ca8fa";
export const url=new URL("../icons/calendar-slash.svg?v=a6903357ba8818107d736d02eb44e3ca7a88438c4778dd2aba9bd53904107b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
