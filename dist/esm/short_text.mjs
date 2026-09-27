export const name="short_text";
export const id="dl_aaa15be1ae1057bffcc9";
export const url=new URL("../icons/short_text.svg?v=164b023ac344c8da1dadf9a0beee0c80ffa7c507e34bcecc155d72e6757d6114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
