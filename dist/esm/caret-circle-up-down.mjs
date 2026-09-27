export const name="caret-circle-up-down";
export const id="dl_81e53020b02b4afd913c";
export const url=new URL("../icons/caret-circle-up-down.svg?v=bfd1e51021562c38e7666cff163ffb2269d9c99762f7dc7d8f8170dda23fd421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
