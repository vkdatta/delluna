export const name="egg-crack";
export const id="dl_b066251711224370bcd6";
export const url=new URL("../icons/egg-crack.svg?v=57c2bd15ae70f4eff940c57e7bb4be53b410d285a71a085aab6836b30d418204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
