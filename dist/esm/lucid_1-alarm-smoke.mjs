export const name="lucid_1-alarm-smoke";
export const id="dl_5e80bbf048104de0932d";
export const url=new URL("../icons/lucid_1-alarm-smoke.svg?v=7deb827cfe99a679055932376e8cfd3fe1809d4e17993791db8d09b5fec856da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
