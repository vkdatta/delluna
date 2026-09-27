export const name="lock-simple-bold";
export const id="dl_095dfb0f989f4e33a8fe";
export const url=new URL("../icons/lock-simple-bold.svg?v=b997c36f36a96841935bab636aea56ca526fbc491ff97714802ca0412c9a35f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
