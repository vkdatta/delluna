export const name="event_list-fill";
export const id="dl_17b98235a7a0c9110f45";
export const url=new URL("../icons/event_list-fill.svg?v=a5365bbdf34494476ec8c2bddc475404a0cde726a9db44fe6b6231bb8021c5bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
