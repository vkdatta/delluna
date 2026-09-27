export const name="android-logo";
export const id="dl_297c6865b91a4d1aabc6";
export const url=new URL("../icons/android-logo.svg?v=7d9d2ae04ec7be8b600eccf14a0f267b63b517208ddd6f091c8792522273e559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
