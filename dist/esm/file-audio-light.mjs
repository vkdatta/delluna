export const name="file-audio-light";
export const id="dl_64cb410be7cd44248341";
export const url=new URL("../icons/file-audio-light.svg?v=6c06eb9498a4fa515b4304e5f1d6dd8383415a9726677cb194b736a1a78c83b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
