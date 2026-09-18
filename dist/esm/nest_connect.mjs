export const name="nest_connect";
export const id="dl_aa72bc2457c94e1d8c7f";
export const url=new URL("../icons/nest_connect.svg?v=ece6fd4ef614b57190e254363114316ba167ebacaaf2b36100dbc692ffc57da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
