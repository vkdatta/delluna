export const name="file-audio-light";
export const id="dl_64cb410be7cd44248341";
export const url=new URL("../icons/file-audio-light.svg?v=b9aa407228cacf726238552f0c57685c391d99248d9406ad57853359c9b5b8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
