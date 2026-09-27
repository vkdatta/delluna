export const name="sign_language_off";
export const id="dl_20a9257da0d2ffb94ff6";
export const url=new URL("../icons/sign_language_off.svg?v=3f3e053518f1eaf051e53251c4b3c93b82cedd757cfd4642a74febd2d86f5f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
