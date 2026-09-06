export const name="lucid_3-parentheses";
export const id="dl_3ddc25374b50446dac7c";
export const url=new URL("../icons/lucid_3-parentheses.svg?v=44d7d3c12a0d8500dc152d79039153d280c708f60d8057157caad68a7bc458d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
