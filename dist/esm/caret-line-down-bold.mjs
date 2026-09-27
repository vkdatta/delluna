export const name="caret-line-down-bold";
export const id="dl_c79cfa8ecfdb4d52b736";
export const url=new URL("../icons/caret-line-down-bold.svg?v=b3dbfb6460f880a568787e996c9474800abdfa135e072dad18bdcc2b689f695d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
