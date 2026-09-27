export const name="arrow-fat-down-thin";
export const id="dl_71ea3f4ead084e44a7e2";
export const url=new URL("../icons/arrow-fat-down-thin.svg?v=25c14875549491ceb714ed8100d64d283f8d9051565ba4825062844e65ce83b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
