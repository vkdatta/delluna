export const name="road-horizon-thin";
export const id="dl_95340efe45ca4924abd3";
export const url=new URL("../icons/road-horizon-thin.svg?v=9dc7b8a50058f47b8c21a8174b08f2f6dff647507cc576dfadd57bcb25fcc353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
