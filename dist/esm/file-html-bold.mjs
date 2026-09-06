export const name="file-html-bold";
export const id="dl_41b4807db36143f2a6a6";
export const url=new URL("../icons/file-html-bold.svg?v=74e3209a8dd57e3061e0fb29377faeaf287d210fe812a2a828a21df0f8a89bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
