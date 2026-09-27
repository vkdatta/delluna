export const name="explore-fill";
export const id="dl_0e1bd064a783963626f2";
export const url=new URL("../icons/explore-fill.svg?v=60ec42b9ace6bee99d807978963bfe0fca956b8b9c54bea469e4ceb303e775d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
