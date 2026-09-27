export const name="scribble-thin";
export const id="dl_12496f5355a799900fe3";
export const url=new URL("../icons/scribble-thin.svg?v=88b01e162439be0f230acd73e77baa68aa6d6160813469b69948359752591466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
