export const name="line-segments-thin";
export const id="dl_afcc121d35184a0984d7";
export const url=new URL("../icons/line-segments-thin.svg?v=4b93e65088d214edf08c707efbf3c9ee97ad2987cd632ab6abdd6034e3dfaa6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
