export const name="not-member-of-thin";
export const id="dl_17ad57911dbc4ccea504";
export const url=new URL("../icons/not-member-of-thin.svg?v=f17bbfb8ad01052163ca08481646d5afa52093b05778383764ebb8c5213b0629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
