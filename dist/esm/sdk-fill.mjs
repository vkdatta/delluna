export const name="sdk-fill";
export const id="dl_378ce2bb79dfdc7c847c";
export const url=new URL("../icons/sdk-fill.svg?v=04fa7ee99c342e3a79f9f672631790f42412c5fd59c9c2c525b716bc56ef2626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
