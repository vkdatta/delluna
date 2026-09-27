export const name="pencil-simple-slash-fill";
export const id="dl_d051be338c56469f8d7d";
export const url=new URL("../icons/pencil-simple-slash-fill.svg?v=533e736c38530619286667ca3ed3ee001934a357450565ce15c0e32aa1756730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
