export const name="home_storage";
export const id="dl_df5212bd5b724532b413";
export const url=new URL("../icons/home_storage.svg?v=95bc5b04bb8f205ad1cb902a9b92d0a04cb736ee9adb3c8015c0a5930ea1a551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
