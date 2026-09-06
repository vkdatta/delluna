export const name="cricket-thin";
export const id="dl_0b4f7bdb9217472694f4";
export const url=new URL("../icons/cricket-thin.svg?v=b6091ac94f4a910ae5d5d7143bc4a8910ccda7f11a9b30af5af971d98299fd04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
