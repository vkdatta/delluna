export const name="subtitles-slash-fill";
export const id="dl_c6bb214a4407133e5f1d";
export const url=new URL("../icons/subtitles-slash-fill.svg?v=533df6bbd97cefbe020162e58918133aec6b392fae6f1d5cba4fb337b68fd508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
