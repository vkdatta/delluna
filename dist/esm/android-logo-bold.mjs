export const name="android-logo-bold";
export const id="dl_ba2bf08253a44ee4b14d";
export const url=new URL("../icons/android-logo-bold.svg?v=8fa61f0daee14a582c62cb6934959b42c36dab85647c5b36d0c4aa61180a92cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
