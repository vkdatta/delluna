export const name="snowing";
export const id="dl_4765dc91accf4722a736";
export const url=new URL("../icons/S/snowing.svg?v=fd9e53e1bd1c90712311251c403779667425b71df5b224153862a1c39b7e7b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
