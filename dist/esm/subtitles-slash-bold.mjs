export const name="subtitles-slash-bold";
export const id="dl_19033f6851d75ecf4059";
export const url=new URL("../icons/subtitles-slash-bold.svg?v=97ad1cb220c6fcfd87c23b1ecc4d35b35516d103b09935b280af0ab4005b4054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
