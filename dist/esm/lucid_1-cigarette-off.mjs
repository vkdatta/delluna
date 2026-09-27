export const name="lucid_1-cigarette-off";
export const id="dl_af4f91d931c54c279ec8";
export const url=new URL("../icons/lucid_1-cigarette-off.svg?v=f39ae7f7d9606be92fad218886cf8d53bce683e1db46845d1ba371fbe23d429f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
