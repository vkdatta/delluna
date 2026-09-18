export const name="takeout_dining_2";
export const id="dl_0c84eba250d94fa68f60";
export const url=new URL("../icons/takeout_dining_2.svg?v=ba9bd827efb8370dfc753ac57ee660b9bd3715e1f648e01d221780c7056278cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
