export const name="dot-outline-thin";
export const id="dl_528d30d32ea84ebf9898";
export const url=new URL("../icons/dot-outline-thin.svg?v=fedc975c952d3e3474ae1ef75cc529793a5a277b7f3299b212a924c3971da221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
