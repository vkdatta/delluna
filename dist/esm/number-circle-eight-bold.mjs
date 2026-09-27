export const name="number-circle-eight-bold";
export const id="dl_3bb8cf6a2bcc4b769109";
export const url=new URL("../icons/number-circle-eight-bold.svg?v=8b1248cf47c7a1ebf9188c2bbd2996febe92f2630a3bd1348c1cf8a0f7c1f210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
