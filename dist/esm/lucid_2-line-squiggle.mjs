export const name="lucid_2-line-squiggle";
export const id="dl_a377549f4b2441b4b278";
export const url=new URL("../icons/lucid_2-line-squiggle.svg?v=afbbaefcf0d4a855261f76104e6646f4f623d585b6a9ed19d5ed5c89842a6d77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
