export const name="patreon-logo-bold";
export const id="dl_884886fb67444a418136";
export const url=new URL("../icons/patreon-logo-bold.svg?v=0d93cadcbc869dc1d85450ce5b05b4e14a204a6b24bb54c95cbb528588c87cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
