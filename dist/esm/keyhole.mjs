export const name="keyhole";
export const id="dl_2aa6f2f330c94fd1af63";
export const url=new URL("../icons/keyhole.svg?v=736e691e820d3bbffe9db6be272c41631411a915d44d04790957c46cfe9ac83a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
