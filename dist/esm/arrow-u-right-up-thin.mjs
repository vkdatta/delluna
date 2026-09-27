export const name="arrow-u-right-up-thin";
export const id="dl_4adc232559854ad79ba5";
export const url=new URL("../icons/arrow-u-right-up-thin.svg?v=65d58b74d378db550d40e245e5364ef00917e30626b106a865823972d70c7dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
