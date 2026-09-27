export const name="synagogue-thin";
export const id="dl_476234dbe0478d4bd8b9";
export const url=new URL("../icons/synagogue-thin.svg?v=f362d49d093d95c0e75edf8030419e6b46be6be06ae063ece2f26e272e66321a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
