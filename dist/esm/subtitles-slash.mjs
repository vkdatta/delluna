export const name="subtitles-slash";
export const id="dl_702ce60373321dbae6e8";
export const url=new URL("../icons/subtitles-slash.svg?v=21b21248cee12eedfe0ab754c0a350f8a709a0eec2087470b688ef18c0d6f5bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
