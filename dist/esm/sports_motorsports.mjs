export const name="sports_motorsports";
export const id="dl_d201add8c3a96c19fe70";
export const url=new URL("../icons/sports_motorsports.svg?v=407e07e421734fa92fd8f74f39e19de6a23f55bcb1d4041b02060c95c43003ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
