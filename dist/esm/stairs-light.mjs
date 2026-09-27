export const name="stairs-light";
export const id="dl_2e9edc506a048ee6341a";
export const url=new URL("../icons/stairs-light.svg?v=09ea6aae224369cbdd03338da0239ae4401d534f4120d9c88a292af6745fc598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
