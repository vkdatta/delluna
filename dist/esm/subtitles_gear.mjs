export const name="subtitles_gear";
export const id="dl_f9e05308ea2e84271252";
export const url=new URL("../icons/subtitles_gear.svg?v=a5347cef9bd27edf0bf524917e32908d00df1835e80ef967e4e96b179a9a47c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
