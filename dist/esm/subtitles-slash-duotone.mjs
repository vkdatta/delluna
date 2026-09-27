export const name="subtitles-slash-duotone";
export const id="dl_36af3bf0d20c305ab523";
export const url=new URL("../icons/subtitles-slash-duotone.svg?v=785f48d748833ad07221850f5479d70022efaedae078f44fd6fc3489b7537df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
