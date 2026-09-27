export const name="nest_secure_alarm";
export const id="dl_982fa092ddaf5ac5a18c";
export const url=new URL("../icons/nest_secure_alarm.svg?v=7d57fe65aacd9a2fc2b559f45821b3af710c43a301a8aeff079576fe143f4def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
