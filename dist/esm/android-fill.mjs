export const name="android-fill";
export const id="dl_b9cdf19fcbf45fbc1191";
export const url=new URL("../icons/android-fill.svg?v=d7d6f888da7be4689a64180839fa3cf7fc8678c0f7508732a837462ed3aa6ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
