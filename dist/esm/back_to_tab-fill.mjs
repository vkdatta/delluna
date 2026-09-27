export const name="back_to_tab-fill";
export const id="dl_7778e08a68a95f0ba0e1";
export const url=new URL("../icons/back_to_tab-fill.svg?v=0c71ba3a9ea6faf9a19403b9007fc4c2125686705f28f277ba24acb66a725899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
