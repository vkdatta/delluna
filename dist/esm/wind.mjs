export const name="wind";
export const id="dl_c283c1118a2645a5be75";
export const url=new URL("../icons/wind.svg?v=7e789fd05673d27330f277c482aa05809346949db1aa707ab2bfad5ebeb5ba0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
