export const name="unite-light";
export const id="dl_3a0ae513fdd6686053a5";
export const url=new URL("../icons/unite-light.svg?v=1903c2ad8eafa31dc8f7a34dce3db98f0d916f429023635b9e26cda13a939bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
