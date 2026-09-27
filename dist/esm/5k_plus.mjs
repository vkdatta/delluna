export const name="5k_plus";
export const id="dl_6a38d153df1ae8cf34ed";
export const url=new URL("../icons/5k_plus.svg?v=43fc506fb91446708eccd981f9854dfa82143af41bef140456df592262d8f768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
