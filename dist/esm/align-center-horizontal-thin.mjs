export const name="align-center-horizontal-thin";
export const id="dl_50e921f2747d41969f4e";
export const url=new URL("../icons/align-center-horizontal-thin.svg?v=0f104337548db42a422ff2293b2bf600ceb911dd45dcdfafcfa06154815721c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
