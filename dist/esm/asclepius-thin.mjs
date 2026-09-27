export const name="asclepius-thin";
export const id="dl_1ca19909781b45ccb83f";
export const url=new URL("../icons/asclepius-thin.svg?v=a09d829858893aac3e20a443ba28196585fb71da2fd559273c8605447faefb1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
