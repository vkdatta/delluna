export const name="pause-thin";
export const id="dl_19a7b81c26ff4c669a5d";
export const url=new URL("../icons/pause-thin.svg?v=fe6317e6218cf0a8b1a9472dcd06b5875c60ac45399bf093f25441c780d60598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
