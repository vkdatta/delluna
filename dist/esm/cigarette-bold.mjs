export const name="cigarette-bold";
export const id="dl_0951ecd053874f4fbd5b";
export const url=new URL("../icons/cigarette-bold.svg?v=ece9fa4e499b417eab8a57a309cba612cd096d6c203897aa8efd836188af7ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
