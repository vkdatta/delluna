export const name="beach-ball-bold";
export const id="dl_b6fa78b34ca44cd4bde6";
export const url=new URL("../icons/beach-ball-bold.svg?v=b4ff020fce28d14a3a2c5f02e31d0f218d6d368ebf8b15e97159204054d65879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
