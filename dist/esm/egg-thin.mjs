export const name="egg-thin";
export const id="dl_bf4f193b47aa4ae1ad74";
export const url=new URL("../icons/egg-thin.svg?v=36d21223686b8f92620d5c04a3866b243eea679b23312214ecea970b9da99e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
