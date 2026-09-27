export const name="cell-signal-slash-thin";
export const id="dl_4b6b878938b442d0b257";
export const url=new URL("../icons/cell-signal-slash-thin.svg?v=bd341f315e734e26b43999e5246755b9593f456d6604a5b558d8756d0c273cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
