export const name="sports_cricket";
export const id="dl_2a3034d3c80c415485b1";
export const url=new URL("../icons/sports_cricket.svg?v=ab6130455f57082fa951b5d5f368727a29c7d7bf3e18bdb9f3323138b1962b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
