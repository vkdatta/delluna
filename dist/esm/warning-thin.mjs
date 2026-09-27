export const name="warning-thin";
export const id="dl_1163dc7bb902289fff4f";
export const url=new URL("../icons/warning-thin.svg?v=c604a6c7a45cc8a1499f69341c8032dc136dd7572bc5a9280c0594c8105759b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
