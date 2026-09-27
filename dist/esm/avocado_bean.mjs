export const name="avocado_bean";
export const id="dl_13a1b5df036b42c527d4";
export const url=new URL("../icons/avocado_bean.svg?v=4367b05b44ff21fd50c1d77a1a8066a3340eadfbda087eac5fb6c3ef5b35ea93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
