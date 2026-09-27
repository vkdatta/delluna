export const name="lucid_2-file-clock";
export const id="dl_065419471e444a068768";
export const url=new URL("../icons/lucid_2-file-clock.svg?v=2b5bb9824cd61c99831bcf005909c840231d514a17a6ca1025d43811844cecdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
