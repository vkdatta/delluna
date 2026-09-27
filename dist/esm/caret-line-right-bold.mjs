export const name="caret-line-right-bold";
export const id="dl_5884d0678fcf4fcfbf39";
export const url=new URL("../icons/caret-line-right-bold.svg?v=46adb4f256c0dad2f9d4cb9a08bce94d11044634071770f521f2f16c074af344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
