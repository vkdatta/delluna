export const name="lucid_2-hand-coins";
export const id="dl_72eb8abceaa348eab5b8";
export const url=new URL("../icons/lucid_2-hand-coins.svg?v=18937dec61e52661472626951fcd1e483facf634107fb8cf497c88db775bae6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
