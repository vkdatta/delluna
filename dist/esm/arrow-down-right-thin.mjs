export const name="arrow-down-right-thin";
export const id="dl_c846302b613e4251aaae";
export const url=new URL("../icons/arrow-down-right-thin.svg?v=12a5f84817194d55b729fdce75432b18223b33d7a2e2c75937b8ec00262c8c31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
