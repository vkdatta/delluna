export const name="sports_cricket-fill";
export const id="dl_92e486efc24bc8d13e83";
export const url=new URL("../icons/sports_cricket-fill.svg?v=9fbe03a9dc7798bbd728290ddbce40d07068ae9b5b826ef147302b91b9c29352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
