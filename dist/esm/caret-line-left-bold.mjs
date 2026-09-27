export const name="caret-line-left-bold";
export const id="dl_712fc590aaba4cd3a922";
export const url=new URL("../icons/caret-line-left-bold.svg?v=7c7d8282c35d51991ca6234e204db4e311ec429f8d74071b6ac00068187fffbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
